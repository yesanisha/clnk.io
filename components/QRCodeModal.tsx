import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import QRCode from 'react-native-qrcode-svg';

interface QRCodeModalProps {
  visible: boolean;
  shortUrl: string;
  onClose: () => void;
  onSave?: () => void;
}

export default function QRCodeModal({
  visible,
  shortUrl,
  onClose,
  onSave,
}: QRCodeModalProps) {
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
          <Text style={styles.title}>Share via QR</Text>

          {/* Short URL with Logo */}
          <View style={styles.urlContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>C</Text>
            </View>
            <Text style={styles.shortUrl}>{shortUrl}</Text>
          </View>

          {/* Separator */}
          <View style={styles.separator} />

          {/* QR Code */}
          <View style={styles.qrContainer}>
            <QRCode
              value={`https://${shortUrl}`}
              size={343}
              backgroundColor="white"
            />
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => {
                onSave?.();
                onClose();
              }}
              activeOpacity={0.7}
            >
              <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.00004 9.33337C2.36823 9.33337 2.66671 9.63185 2.66671 10V12.6667C2.66671 12.8435 2.73695 13.0131 2.86197 13.1381C2.98699 13.2631 3.15656 13.3334 3.33337 13.3334H12.6667C12.8435 13.3334 13.0131 13.2631 13.1381 13.1381C13.2631 13.0131 13.3334 12.8435 13.3334 12.6667V10C13.3334 9.63185 13.6319 9.33337 14 9.33337C14.3682 9.33337 14.6667 9.63185 14.6667 10V12.6667C14.6667 13.1971 14.456 13.7058 14.0809 14.0809C13.7058 14.456 13.1971 14.6667 12.6667 14.6667H3.33337C2.80294 14.6667 2.29423 14.456 1.91916 14.0809C1.54409 13.7058 1.33337 13.1971 1.33337 12.6667V10C1.33337 9.63185 1.63185 9.33337 2.00004 9.33337Z"
                  fill="#171717"
                />
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.19526 6.19526C4.45561 5.93491 4.87772 5.93491 5.13807 6.19526L8 9.05719L10.8619 6.19526C11.1223 5.93491 11.5444 5.93491 11.8047 6.19526C12.0651 6.45561 12.0651 6.87772 11.8047 7.13807L8.4714 10.4714C8.21106 10.7318 7.78894 10.7318 7.5286 10.4714L4.19526 7.13807C3.93491 6.87772 3.93491 6.45561 4.19526 6.19526Z"
                  fill="#171717"
                />
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.00004 1.33337C8.36823 1.33337 8.66671 1.63185 8.66671 2.00004V10C8.66671 10.3682 8.36823 10.6667 8.00004 10.6667C7.63185 10.6667 7.33337 10.3682 7.33337 10V2.00004C7.33337 1.63185 7.63185 1.33337 8.00004 1.33337Z"
                  fill="#171717"
                />
              </Svg>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.doneButton}
              onPress={onClose}
              activeOpacity={0.8}
            >
              <Text style={styles.doneButtonText}>Done</Text>
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
    height: 550,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 24,
    paddingHorizontal: 16,
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
    width: 343,
    height: 28,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 28,
    color: '#000000',
    alignSelf: 'flex-start',
  },
  urlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    alignSelf: 'flex-start',
  },
  logo: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: '#E8EFD8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#4B5E2D',
  },
  shortUrl: {
    width: 319,
    height: 20,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#52525B',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#E5E5E5',
    alignSelf: 'stretch',
  },
  qrContainer: {
    width: 343,
    height: 343,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
    alignSelf: 'stretch',
    marginBottom: 16,
  },
  saveButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    paddingHorizontal: 16,
    gap: 8,
    width: 167.5,
    minWidth: 40,
    height: 40,
    minHeight: 40,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 6,
    flex: 1,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#171717',
  },
  doneButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    paddingHorizontal: 16,
    gap: 8,
    width: 167.5,
    minWidth: 40,
    height: 40,
    minHeight: 40,
    backgroundColor: '#4B5E2D',
    borderRadius: 6,
    flex: 1,
  },
  doneButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});
