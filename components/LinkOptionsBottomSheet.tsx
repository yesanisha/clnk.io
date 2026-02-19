import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ClinkItem } from '../types';

interface LinkOptionsBottomSheetProps {
  visible: boolean;
  link: ClinkItem | null;
  onClose: () => void;
  onVisitUrl: () => void;
  onShareLink: () => void;
  onSeeQR: () => void;
  onDeleteLink: () => void;
}

export default function LinkOptionsBottomSheet({
  visible,
  link,
  onClose,
  onVisitUrl,
  onShareLink,
  onSeeQR,
  onDeleteLink,
}: LinkOptionsBottomSheetProps) {
  if (!link) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.sheet} onPress={(e) => e.stopPropagation()}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Link options</Text>
            <View style={styles.linkPreview}>
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
          </View>

          <View style={styles.divider} />

          {/* Actions */}
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.actionRow}
              onPress={() => {
                onVisitUrl();
                onClose();
              }}
              activeOpacity={0.7}
            >
              <Feather name="external-link" size={20} color="#333333" style={styles.actionIcon} />
              <Text style={styles.actionText}>Visit URL</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionRow}
              onPress={() => {
                onShareLink();
                onClose();
              }}
              activeOpacity={0.7}
            >
              <Feather name="share-2" size={20} color="#333333" style={styles.actionIcon} />
              <Text style={styles.actionText}>Share link</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionRow}
              onPress={() => {
                onSeeQR();
                onClose();
              }}
              activeOpacity={0.7}
            >
              <Feather name="maximize" size={20} color="#333333" style={styles.actionIcon} />
              <Text style={styles.actionText}>See QR</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionRow}
              onPress={() => {
                onDeleteLink();
                onClose();
              }}
              activeOpacity={0.7}
            >
              <Feather name="trash-2" size={20} color="#E74C3C" style={styles.actionIcon} />
              <Text style={[styles.actionText, styles.deleteText]}>
                Delete link
              </Text>
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
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 16,
  },
  linkPreview: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  favicon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  faviconText: {
    fontSize: 18,
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
    fontSize: 14,
    color: '#999999',
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginVertical: 16,
  },
  actions: {
    gap: 4,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  actionIcon: {
    width: 24,
  },
  actionText: {
    fontSize: 16,
    color: '#333333',
  },
  deleteText: {
    color: '#E74C3C',
  },
});
