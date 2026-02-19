import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Clipboard from 'expo-clipboard';
import * as Linking from 'expo-linking';
import { Share } from 'react-native';

import URLModeHeader from '../components/URLModeHeader';
import LongLinkInput from '../components/LongLinkInput';
import ShortLinkCard from '../components/ShortLinkCard';
import LinkOptionsBottomSheet from '../components/LinkOptionsBottomSheet';
import DeleteConfirmationModal from '../components/DeleteConfirmationModal';
import Toast from '../components/Toast';
import DeletedLinkMessage from '../components/DeletedLinkMessage';

import { ClinkItem } from '../types';
import {
  getAllClinkItems,
  saveClinkItem,
  deleteClinkItem,
} from '../services/storageService';
import {
  generateUniqueId,
  createShortUrl,
  extractTitleFromUrl,
  formatUrl,
} from '../utils/linkUtils';

interface URLModeScreenProps {
  onModePress?: () => void;
}

export default function URLModeScreen({ onModePress }: URLModeScreenProps) {
  const [clinkItems, setClinkItems] = useState<ClinkItem[]>([]);
  const [selectedLink, setSelectedLink] = useState<ClinkItem | null>(null);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' as 'success' | 'error' });
  const [deletedLinkId, setDeletedLinkId] = useState<string | null>(null);

  // Load items on mount
  useEffect(() => {
    loadClinkItems();
  }, []);

  const loadClinkItems = async () => {
    const items = await getAllClinkItems();
    setClinkItems(items);
  };

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ visible: true, message, type });
  };

  const hideToast = () => {
    setToast({ visible: false, message: '', type: 'success' });
  };

  const handleShortenLink = async (url: string) => {
    try {
      // Generate unique ID
      const id = generateUniqueId();
      const shortUrl = createShortUrl(id);
      const formattedUrl = formatUrl(url);
      const title = extractTitleFromUrl(url);

      // Create new ClinkItem
      const newItem: ClinkItem = {
        id,
        originalUrl: formattedUrl,
        shortUrl,
        timestamp: Date.now(),
        clicks: 0,
        title,
      };

      // Save to storage
      const success = await saveClinkItem(newItem);

      if (success) {
        // Add to state with "new" flag
        setClinkItems([{ ...newItem, isNew: true } as any, ...clinkItems]);

        // Show success toast
        showToast('Link shortened!');

        // Remove "new" highlight after 2 seconds
        setTimeout(() => {
          setClinkItems((items) =>
            items.map((item) =>
              item.id === id ? { ...item, isNew: false } as any : item
            )
          );
        }, 2000);
      } else {
        showToast('Failed to save link', 'error');
      }
    } catch (error) {
      console.error('Error shortening link:', error);
      showToast('An error occurred', 'error');
    }
  };

  const handleCopyLink = async (link: ClinkItem) => {
    try {
      await Clipboard.setStringAsync(link.shortUrl);
      showToast('Link copied!');
    } catch (error) {
      console.error('Error copying link:', error);
      showToast('Failed to copy', 'error');
    }
  };

  const handleMenuPress = (link: ClinkItem) => {
    setSelectedLink(link);
    setShowBottomSheet(true);
  };

  const handleVisitUrl = async () => {
    if (selectedLink) {
      try {
        const canOpen = await Linking.canOpenURL(selectedLink.originalUrl);
        if (canOpen) {
          await Linking.openURL(selectedLink.originalUrl);
        } else {
          showToast('Cannot open URL', 'error');
        }
      } catch (error) {
        console.error('Error opening URL:', error);
        showToast('Failed to open URL', 'error');
      }
    }
  };

  const handleShareLink = async () => {
    if (selectedLink) {
      try {
        await Share.share({
          message: `Check out this link: ${selectedLink.shortUrl}`,
          url: selectedLink.originalUrl,
          title: selectedLink.title || 'Share Link',
        });
      } catch (error) {
        console.error('Error sharing:', error);
        showToast('Failed to share', 'error');
      }
    }
  };

  const handleSeeQR = () => {
    if (selectedLink) {
      // TODO: Implement QR code view
      Alert.alert('QR Code', `QR code for ${selectedLink.shortUrl}`, [
        { text: 'OK' },
      ]);
    }
  };

  const handleDeletePress = () => {
    setShowBottomSheet(false);
    setTimeout(() => {
      setShowDeleteModal(true);
    }, 300);
  };

  const handleConfirmDelete = async () => {
    if (selectedLink) {
      try {
        const success = await deleteClinkItem(selectedLink.id);

        if (success) {
          // Show deleted message inline
          setDeletedLinkId(selectedLink.id);

          // Remove from storage after 3 seconds
          setTimeout(async () => {
            setClinkItems((items) => items.filter((item) => item.id !== selectedLink.id));
            setDeletedLinkId(null);
          }, 3000);

          setSelectedLink(null);
        } else {
          showToast('Failed to delete', 'error');
        }
      } catch (error) {
        console.error('Error deleting link:', error);
        showToast('An error occurred', 'error');
      }
    }
  };

  const renderLinkCard = ({ item }: { item: ClinkItem & { isNew?: boolean } }) => {
    // Show deleted message if this link was just deleted
    if (deletedLinkId === item.id) {
      return <DeletedLinkMessage />;
    }

    return (
      <ShortLinkCard
        link={item}
        onCopyPress={handleCopyLink}
        onMenuPress={handleMenuPress}
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        {/* Toast */}
        <Toast
          visible={toast.visible}
          message={toast.message}
          type={toast.type}
          onHide={hideToast}
        />

        {/* Header */}
        <URLModeHeader currentMode="URL" onModePress={onModePress} />

        {/* Content */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <FlatList
            data={clinkItems}
            renderItem={renderLinkCard}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={
              <>
                {/* Long Link Input */}
                <LongLinkInput onShortenLink={handleShortenLink} />

                {/* Your Short Links Section */}
                {clinkItems.length > 0 && (
                  <View style={styles.linksSection}>
                    <Text style={styles.sectionTitle}>Your short links</Text>
                  </View>
                )}
              </>
            }
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          />
        </KeyboardAvoidingView>

        {/* Link Options Bottom Sheet */}
        <LinkOptionsBottomSheet
          visible={showBottomSheet}
          link={selectedLink}
          onClose={() => setShowBottomSheet(false)}
          onVisitUrl={handleVisitUrl}
          onShareLink={handleShareLink}
          onSeeQR={handleSeeQR}
          onDeleteLink={handleDeletePress}
        />

        {/* Delete Confirmation Modal */}
        <DeleteConfirmationModal
          visible={showDeleteModal}
          link={selectedLink}
          onClose={() => setShowDeleteModal(false)}
          onConfirmDelete={handleConfirmDelete}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  linksSection: {
    marginTop: 24,
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
});
