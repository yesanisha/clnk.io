import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import { ClinkItem } from '../types';

interface DeleteConfirmationModalProps {
  visible: boolean;
  link: ClinkItem | null;
  onClose: () => void;
  onConfirmDelete: () => void;
}

export default function DeleteConfirmationModal({
  visible,
  link,
  onClose,
  onConfirmDelete,
}: DeleteConfirmationModalProps) {
  if (!link) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable
          style={styles.sheet}
          onPress={(e) => e.stopPropagation()}
        >
          {/* Title and Subtitle */}
          <Text style={styles.title}>Delete this link?</Text>
          <Text style={styles.subtitle}>
            You won't be able to open this short link anymore.
          </Text>

          {/* Link Preview Card */}
          <View style={styles.linkPreviewCard}>
            <View style={styles.favicon}>
              <Text style={styles.faviconText}>
                {(link.title || 'L').charAt(0).toUpperCase()}
              </Text>
            </View>
            <View style={styles.linkInfo}>
              <Text style={styles.linkTitle} numberOfLines={1}>
                {link.title || 'Link'}
              </Text>
              <Text style={styles.linkUrl} numberOfLines={1}>
                {link.shortUrl}
              </Text>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonsRow}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
              activeOpacity={0.7}
            >
              <Text style={styles.cancelButtonText}>No, go back</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.deleteButton]}
              onPress={() => {
                onConfirmDelete();
                onClose();
              }}
              activeOpacity={0.7}
            >
              <Text style={styles.deleteButtonText}>Yes, delete</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  sheet: {
    width: '100%',
    maxWidth: 425,
    height: 266,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 24,
    gap: 12,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderBottomWidth: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignSelf: 'center',
  },
  title: {
    width: 327,
    height: 28,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 28,
    color: '#171717',
    alignSelf: 'flex-start',
  },
  subtitle: {
    width: 327,
    height: 20,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#737373',
    alignSelf: 'flex-start',
  },
  linkPreviewCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 8,
    width: 327,
    height: 76,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    alignSelf: 'stretch',
  },
  favicon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  faviconText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666666',
  },
  linkInfo: {
    flex: 1,
  },
  linkTitle: {
    width: 82,
    height: 20,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#000000',
  },
  linkUrl: {
    width: 82,
    height: 20,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#999999',
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 16,
    alignSelf: 'stretch',
    marginBottom: 16,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    paddingHorizontal: 16,
    gap: 8,
    width: 159.5,
    minWidth: 40,
    height: 40,
    minHeight: 40,
    borderRadius: 6,
    flex: 1,
  },
  cancelButton: {
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#D4D4D4',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  
  },
  deleteButton: {
    backgroundColor: '#DC2626',
  },
  deleteButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
