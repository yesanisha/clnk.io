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
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 24,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#666666',
    lineHeight: 22,
    marginBottom: 20,
  },
  linkPreviewCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
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
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  linkUrl: {
    fontSize: 13,
    color: '#999999',
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flex: 1,
    height: 52,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f3f3f3',
      borderWidth: 1,
    borderColor: '#34313138',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  
  },
  deleteButton: {
    backgroundColor: '#E74C3C',
  },
  deleteButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
