import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
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
  const [pressedOption, setPressedOption] = React.useState<string | null>(null);

  const handleOptionPress = (option: string, callback: () => void) => {
    setPressedOption(option);
    callback();
    setTimeout(() => {
      setPressedOption(null);
      onClose();
    }, 200);
  };

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
            <View style={styles.linkSummary}>
              <View style={styles.favicon}>
                <Text style={styles.faviconText}>
                  {(link.title || 'L').charAt(0).toUpperCase()}
                </Text>
              </View>
              <View style={styles.linkInfo}>
                <Text style={styles.longUrl} numberOfLines={1}>
                  {link.originalUrl || link.title || 'Link'}
                </Text>
                <Text style={styles.shortUrl} numberOfLines={1}>
                  {link.shortUrl}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          {/* Actions */}
          <View style={styles.actions}>
            <TouchableOpacity
              style={[styles.actionRow, pressedOption === 'visit' && styles.actionRowPressed]}
              onPress={() => handleOptionPress('visit', onVisitUrl)}
              activeOpacity={0.7}
            >
              <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <Path fillRule="evenodd" clipRule="evenodd" d="M3.33331 4.66668C3.1565 4.66668 2.98693 4.73691 2.86191 4.86194C2.73688 4.98696 2.66665 5.15653 2.66665 5.33334V12.6667C2.66665 12.8435 2.73688 13.0131 2.86191 13.1381C2.98693 13.2631 3.1565 13.3333 3.33331 13.3333H10.6666C10.8435 13.3333 11.013 13.2631 11.1381 13.1381C11.2631 13.0131 11.3333 12.8435 11.3333 12.6667V8.66668C11.3333 8.29849 11.6318 8.00001 12 8.00001C12.3682 8.00001 12.6666 8.29849 12.6666 8.66668V12.6667C12.6666 13.1971 12.4559 13.7058 12.0809 14.0809C11.7058 14.456 11.1971 14.6667 10.6666 14.6667H3.33331C2.80288 14.6667 2.29417 14.456 1.9191 14.0809C1.54403 13.7058 1.33331 13.1971 1.33331 12.6667V5.33334C1.33331 4.80291 1.54403 4.2942 1.9191 3.91913C2.29417 3.54406 2.80288 3.33334 3.33331 3.33334H7.33331C7.7015 3.33334 7.99998 3.63182 7.99998 4.00001C7.99998 4.3682 7.7015 4.66668 7.33331 4.66668H3.33331Z" fill="#171717"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M9.33331 2.00001C9.33331 1.63182 9.63179 1.33334 9.99998 1.33334H14C14.3682 1.33334 14.6666 1.63182 14.6666 2.00001V6.00001C14.6666 6.3682 14.3682 6.66668 14 6.66668C13.6318 6.66668 13.3333 6.3682 13.3333 6.00001V2.66668H9.99998C9.63179 2.66668 9.33331 2.3682 9.33331 2.00001Z" fill="#171717"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M14.4714 1.52861C14.7318 1.78896 14.7318 2.21107 14.4714 2.47141L7.13807 9.80475C6.87772 10.0651 6.45561 10.0651 6.19526 9.80475C5.93491 9.5444 5.93491 9.12229 6.19526 8.86194L13.5286 1.52861C13.7889 1.26826 14.2111 1.26826 14.4714 1.52861Z" fill="#171717"/>
              </Svg>
              <Text style={styles.actionText}>Visit URL</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionRow, pressedOption === 'share' && styles.actionRowPressed]}
              onPress={() => handleOptionPress('share', onShareLink)}
              activeOpacity={0.7}
            >
              <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <Path fillRule="evenodd" clipRule="evenodd" d="M11.3334 3.33333C10.9652 3.33333 10.6667 3.63181 10.6667 3.99999C10.6667 4.36818 10.9652 4.66666 11.3334 4.66666C11.7016 4.66666 12.0001 4.36818 12.0001 3.99999C12.0001 3.63181 11.7016 3.33333 11.3334 3.33333ZM9.33337 3.99999C9.33337 2.89542 10.2288 1.99999 11.3334 1.99999C12.438 1.99999 13.3334 2.89542 13.3334 3.99999C13.3334 5.10456 12.438 5.99999 11.3334 5.99999C10.2288 5.99999 9.33337 5.10456 9.33337 3.99999Z" fill="#171717"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M4.66671 6.66666C4.29852 6.66666 4.00004 6.96514 4.00004 7.33333C4.00004 7.70152 4.29852 7.99999 4.66671 7.99999C5.03489 7.99999 5.33337 7.70152 5.33337 7.33333C5.33337 6.96514 5.03489 6.66666 4.66671 6.66666ZM2.66671 7.33333C2.66671 6.22876 3.56214 5.33333 4.66671 5.33333C5.77128 5.33333 6.66671 6.22876 6.66671 7.33333C6.66671 8.4379 5.77128 9.33333 4.66671 9.33333C3.56214 9.33333 2.66671 8.4379 2.66671 7.33333Z" fill="#171717"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M11.3334 10.6667C10.9652 10.6667 10.6667 10.9651 10.6667 11.3333C10.6667 11.7015 10.9652 12 11.3334 12C11.7016 12 12.0001 11.7015 12.0001 11.3333C12.0001 10.9651 11.7016 10.6667 11.3334 10.6667ZM9.33337 11.3333C9.33337 10.2287 10.2288 9.33333 11.3334 9.33333C12.438 9.33333 13.3334 10.2287 13.3334 11.3333C13.3334 12.4379 12.438 13.3333 11.3334 13.3333C10.2288 13.3333 9.33337 12.4379 9.33337 11.3333Z" fill="#171717"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M6.24764 8.15286C6.45172 7.87848 6.83888 7.81891 7.11326 8.02299L10.4466 10.3563C10.721 10.5604 10.7806 10.9476 10.5765 11.2219C10.3724 11.4963 9.98526 11.5559 9.71088 11.3518L6.37754 9.01849C6.10316 8.81441 6.04356 8.42725 6.24764 8.15286Z" fill="#171717"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M10.5765 4.11141C10.7806 4.38579 10.721 4.77295 10.4466 4.97703L7.11326 7.31036C6.83888 7.51444 6.45172 7.45487 6.24764 7.18049C6.04356 6.90611 6.10316 6.51894 6.37754 6.31486L9.71088 3.98153C9.98526 3.77745 10.3724 3.83702 10.5765 4.11141Z" fill="#171717"/>
              </Svg>
              <Text style={styles.actionText}>Share link</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionRow, pressedOption === 'qr' && styles.actionRowPressed]}
              onPress={() => handleOptionPress('qr', onSeeQR)}
              activeOpacity={0.7}
            >
              <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <Path fillRule="evenodd" clipRule="evenodd" d="M3.33331 2.66666C3.1565 2.66666 2.98693 2.7369 2.86191 2.86192C2.73688 2.98695 2.66665 3.15652 2.66665 3.33333V4.66666C2.66665 5.03485 2.36817 5.33333 1.99998 5.33333C1.63179 5.33333 1.33331 5.03485 1.33331 4.66666V3.33333C1.33331 2.8029 1.54403 2.29419 1.9191 1.91911C2.29417 1.54404 2.80288 1.33333 3.33331 1.33333H4.66665C5.03484 1.33333 5.33331 1.63181 5.33331 1.99999C5.33331 2.36818 5.03484 2.66666 4.66665 2.66666H3.33331Z" fill="#171717"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M10.6667 1.99999C10.6667 1.63181 10.9652 1.33333 11.3334 1.33333H12.6667C13.1971 1.33333 13.7058 1.54404 14.0809 1.91911C14.456 2.29419 14.6667 2.8029 14.6667 3.33333V4.66666C14.6667 5.03485 14.3682 5.33333 14 5.33333C13.6318 5.33333 13.3334 5.03485 13.3334 4.66666V3.33333C13.3334 3.15652 13.2631 2.98695 13.1381 2.86192C13.0131 2.7369 12.8435 2.66666 12.6667 2.66666H11.3334C10.9652 2.66666 10.6667 2.36818 10.6667 1.99999Z" fill="#171717"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M14 10.6667C14.3682 10.6667 14.6667 10.9651 14.6667 11.3333V12.6667C14.6667 13.1971 14.456 13.7058 14.0809 14.0809C13.7058 14.456 13.1971 14.6667 12.6667 14.6667H11.3334C10.9652 14.6667 10.6667 14.3682 10.6667 14C10.6667 13.6318 10.9652 13.3333 11.3334 13.3333H12.6667C12.8435 13.3333 13.0131 13.2631 13.1381 13.1381C13.2631 13.0131 13.3334 12.8435 13.3334 12.6667V11.3333C13.3334 10.9651 13.6318 10.6667 14 10.6667Z" fill="#171717"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M1.99998 10.6667C2.36817 10.6667 2.66665 10.9651 2.66665 11.3333V12.6667C2.66665 12.8435 2.73688 13.0131 2.86191 13.1381C2.98693 13.2631 3.1565 13.3333 3.33331 13.3333H4.66665C5.03484 13.3333 5.33331 13.6318 5.33331 14C5.33331 14.3682 5.03484 14.6667 4.66665 14.6667H3.33331C2.80288 14.6667 2.29417 14.456 1.9191 14.0809C1.54403 13.7058 1.33331 13.1971 1.33331 12.6667V11.3333C1.33331 10.9651 1.63179 10.6667 1.99998 10.6667Z" fill="#171717"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M4 7.99999C4 7.63181 4.29848 7.33333 4.66667 7.33333H11.3333C11.7015 7.33333 12 7.63181 12 7.99999C12 8.36818 11.7015 8.66666 11.3333 8.66666H4.66667C4.29848 8.66666 4 8.36818 4 7.99999Z" fill="#171717"/>
              </Svg>
              <Text style={styles.actionText}>See QR</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionRow, pressedOption === 'delete' && styles.actionRowDeletePressed]}
              onPress={() => handleOptionPress('delete', onDeleteLink)}
              activeOpacity={0.7}
            >
              <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <Path fillRule="evenodd" clipRule="evenodd" d="M1.33331 3.99999C1.33331 3.63181 1.63179 3.33333 1.99998 3.33333H14C14.3682 3.33333 14.6666 3.63181 14.6666 3.99999C14.6666 4.36818 14.3682 4.66666 14 4.66666H1.99998C1.63179 4.66666 1.33331 4.36818 1.33331 3.99999Z" fill="#DC2626"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M3.33335 3.33333C3.70154 3.33333 4.00002 3.63181 4.00002 3.99999V13.3333C4.00002 13.4498 4.06499 13.6222 4.22142 13.7786C4.37786 13.935 4.55017 14 4.66669 14H11.3334C11.4499 14 11.6222 13.935 11.7786 13.7786C11.9351 13.6222 12 13.4498 12 13.3333V3.99999C12 3.63181 12.2985 3.33333 12.6667 3.33333C13.0349 3.33333 13.3334 3.63181 13.3334 3.99999V13.3333C13.3334 13.8835 13.065 14.3778 12.7214 14.7214C12.3779 15.065 11.8835 15.3333 11.3334 15.3333H4.66669C4.11653 15.3333 3.62218 15.065 3.27862 14.7214C2.93505 14.3778 2.66669 13.8835 2.66669 13.3333V3.99999C2.66669 3.63181 2.96516 3.33333 3.33335 3.33333Z" fill="#DC2626"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M6.22142 2.22141C6.06499 2.37785 6.00002 2.55016 6.00002 2.66667V4.00001C6.00002 4.3682 5.70154 4.66667 5.33335 4.66667C4.96516 4.66667 4.66669 4.3682 4.66669 4.00001V2.66667C4.66669 2.11652 4.93505 1.62216 5.27862 1.2786C5.62218 0.935037 6.11653 0.666672 6.66669 0.666672H9.33335C9.88351 0.666672 10.3779 0.935037 10.7214 1.2786C11.065 1.62216 11.3334 2.11652 11.3334 2.66667V4.00001C11.3334 4.3682 11.0349 4.66667 10.6667 4.66667C10.2985 4.66667 10 4.3682 10 4.00001V2.66667C10 2.55016 9.93505 2.37785 9.77862 2.22141C9.62218 2.06497 9.44987 2.00001 9.33335 2.00001H6.66669C6.55017 2.00001 6.37786 2.06497 6.22142 2.22141Z" fill="#DC2626"/>
              </Svg>
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
    backgroundColor: '#FAFAFA',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderBottomWidth: 0,
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 16,
    gap: 16,
    width: '100%',
    maxWidth: 425,
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'column',
    gap: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  linkSummary: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    alignSelf: 'stretch',
  },
  favicon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#E8EFD8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  faviconText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4B5E2D',
  },
  linkInfo: {
    flex: 1,
    flexDirection: 'column',
    gap: 2,
  },
  longUrl: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#171717',
  },
  shortUrl: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#52525B',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
  },
  actions: {
    gap: 4,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 8,
    gap: 8,
    height: 40,
    borderRadius: 4,
    alignSelf: 'stretch',
  },
  actionRowPressed: {
    backgroundColor: '#E8EFD8',
  },
  actionRowDeletePressed: {
    backgroundColor: 'rgba(220, 38, 38, 0.1)',
  },
  actionText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#171717',
  },
  deleteText: {
    color: '#DC2626',
  },
});
