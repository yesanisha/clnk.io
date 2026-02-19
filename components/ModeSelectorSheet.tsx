import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';

interface ModeSelectorSheetProps {
  visible: boolean;
  currentMode: 'Links' | 'URL';
  onClose: () => void;
  onSelectMode: (mode: 'Links' | 'URL') => void;
}

export default function ModeSelectorSheet({
  visible,
  currentMode,
  onClose,
  onSelectMode,
}: ModeSelectorSheetProps) {
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
            <Text style={styles.headerTitle}>clnk.</Text>
          </View>

          {/* Mode Options */}
          <View style={styles.options}>
            {/* Links Mode */}
            <TouchableOpacity
              style={[
                styles.optionRow,
                currentMode === 'Links' && styles.optionRowActive,
              ]}
              onPress={() => {
                onSelectMode('Links');
                onClose();
              }}
              activeOpacity={0.7}
            >
              <View style={styles.optionContent}>
                <Text style={styles.optionIcon}>🔗</Text>
                <Text style={styles.optionText}>Links</Text>
                              <Text style={styles.optionDescription}>Your own links page</Text>

              </View>
            </TouchableOpacity>

            {/* URL Mode */}
            <TouchableOpacity
              style={[
                styles.optionRow,
                currentMode === 'URL' && styles.optionRowActive,
              ]}
              onPress={() => {
                onSelectMode('URL');
                onClose();
              }}
              activeOpacity={0.7}
            >
              <View style={styles.optionContent}>
                <Text style={styles.optionIcon}>🔍</Text>
                <Text style={styles.optionText}>URL</Text>
                  <Text style={styles.optionDescription}>
                Shorten URLs and see clicks
              </Text>
              </View>
            
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
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: -0.5,
  },
  options: {
    gap: 12,
  },
  optionRow: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1.5,
    borderColor: '#F0F0F0',
  },
  optionRowActive: {
    backgroundColor: '#F0F8F0',
    borderColor: '#6B9E6D',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 6,
  },
  optionIcon: {
    fontSize: 20,
  },
  optionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  optionDescription: {
    fontSize: 14,
    color: '#666666',
    marginLeft: 32,

  },
});
