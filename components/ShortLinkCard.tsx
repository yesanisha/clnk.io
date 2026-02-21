import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
import { ClinkItem } from '../types';

interface ShortLinkCardProps {
  link: ClinkItem & { isNew?: boolean };
  onCopyPress?: (link: ClinkItem) => void;
  onMenuPress?: (link: ClinkItem) => void;
}

export default function ShortLinkCard({
  link,
  onCopyPress,
  onMenuPress,
}: ShortLinkCardProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [isMenuPressed, setIsMenuPressed] = useState(false);

  const handleCopyPress = () => {
    setIsCopied(true);
    onCopyPress?.(link);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleMenuPress = () => {
    setIsMenuPressed(true);
    onMenuPress?.(link);
    setTimeout(() => setIsMenuPressed(false), 2000);
  };
  return (
    <View style={[
      styles.container,
      link.isNew && styles.containerNew,
    ]}>
      {/* Left Section */}
      <View style={styles.leftSection}>
        {/* Favicon and Title Row */}
        <View style={styles.titleRow}>
          <View style={styles.faviconContainer}>
            <Text style={styles.faviconText}>
              {(link.title || 'L').charAt(0).toUpperCase()}
            </Text>
          </View>
          <Text style={styles.title} numberOfLines={1}>
            {link.title || 'Link'}
          </Text>
        </View>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <G clipPath="url(#clip0_4603_1646)">
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.52859 5.52853C5.71962 5.33751 6.00704 5.28065 6.25641 5.38455L14.2564 8.71789C14.5124 8.82456 14.6757 9.07859 14.6663 9.35578C14.6569 9.63297 14.4769 9.87541 14.2143 9.96456L11.0416 11.0415L9.96462 14.2142C9.87547 14.4769 9.63303 14.6569 9.35584 14.6662C9.07865 14.6756 8.82462 14.5124 8.71795 14.2563L5.38461 6.25635C5.28071 6.00698 5.33757 5.71956 5.52859 5.52853ZM7.23809 7.23803L9.26961 12.1137L9.88471 10.3016C9.95133 10.1054 10.1054 9.95127 10.3017 9.88465L12.1137 9.26955L7.23809 7.23803Z"
                fill="#52525B"
              />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.2426 10.2426C10.5029 9.98228 10.9251 9.98228 11.1854 10.2426L14.0141 13.0713C14.2744 13.3316 14.2744 13.7538 14.0141 14.0141C13.7537 14.2745 13.3316 14.2745 13.0713 14.0141L10.2426 11.1854C9.98225 10.9251 9.98225 10.503 10.2426 10.2426Z"
                fill="#52525B"
              />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.6193 0.848851C4.97492 0.753471 5.34053 0.964437 5.43591 1.32006L5.95391 3.25139C6.04929 3.60701 5.83832 3.97262 5.4827 4.068C5.12708 4.16338 4.76147 3.95242 4.66609 3.5968L4.14809 1.66546C4.05271 1.30984 4.26367 0.944232 4.6193 0.848851ZM9.7714 2.22869C10.0318 2.48904 10.0318 2.91115 9.7714 3.1715L8.35673 4.58616C8.09639 4.84651 7.67428 4.84651 7.41393 4.58616C7.15358 4.32581 7.15358 3.90371 7.41393 3.64336L8.82859 2.22869C9.08894 1.96834 9.51105 1.96834 9.7714 2.22869ZM0.848073 4.61945C0.943423 4.26382 1.30901 4.05282 1.66464 4.14817L3.59664 4.66617C3.95227 4.76152 4.16327 5.12711 4.06792 5.48274C3.97257 5.83837 3.60698 6.04937 3.25135 5.95402L1.31935 5.43602C0.963722 5.34067 0.752723 4.97508 0.848073 4.61945ZM4.58518 7.4138C4.84565 7.67403 4.84585 8.09614 4.58562 8.35661L3.17229 9.77128C2.91206 10.0317 2.48995 10.0319 2.22948 9.77172C1.96901 9.51149 1.96881 9.08938 2.22904 8.82891L3.64237 7.41424C3.9026 7.15377 4.32471 7.15357 4.58518 7.4138Z"
                fill="#52525B"
              />
            </G>
            <Defs>
              <ClipPath id="clip0_4603_1646">
                <Rect width="16" height="16" fill="white" />
              </ClipPath>
            </Defs>
          </Svg>
          <Text style={styles.statsText}>{link.clicks || 0}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.statsText}>{link.shortUrl}</Text>
        </View>
      </View>

      {/* Right Section - Actions */}
      <View style={styles.rightSection}>
        <TouchableOpacity
          style={[styles.iconButton, isCopied && styles.iconButtonCopied]}
          onPress={handleCopyPress}
          activeOpacity={0.6}
        >
          <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <G clipPath="url(#clip0_4681_1067)">
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.33331 6.66659C6.96512 6.66659 6.66665 6.96506 6.66665 7.33325V13.3333C6.66665 13.7014 6.96512 13.9999 7.33331 13.9999H13.3333C13.7015 13.9999 14 13.7014 14 13.3333V7.33325C14 6.96506 13.7015 6.66659 13.3333 6.66659H7.33331ZM5.33331 7.33325C5.33331 6.22868 6.22874 5.33325 7.33331 5.33325H13.3333C14.4379 5.33325 15.3333 6.22868 15.3333 7.33325V13.3333C15.3333 14.4378 14.4379 15.3333 13.3333 15.3333H7.33331C6.22874 15.3333 5.33331 14.4378 5.33331 13.3333V7.33325Z"
                fill="#52525B"
              />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.66669 2.00008C2.48988 2.00008 2.32031 2.07032 2.19528 2.19534C2.07026 2.32037 2.00002 2.48994 2.00002 2.66675V8.66675C2.00002 8.84356 2.07026 9.01313 2.19528 9.13815C2.32031 9.26318 2.48988 9.33341 2.66669 9.33341H3.33335C3.70154 9.33341 4.00002 9.63189 4.00002 10.0001C4.00002 10.3683 3.70154 10.6667 3.33335 10.6667H2.66669C2.13625 10.6667 1.62755 10.456 1.25247 10.081C0.877401 9.70589 0.666687 9.19718 0.666687 8.66675V2.66675C0.666687 2.13632 0.877401 1.62761 1.25247 1.25253C1.62755 0.877462 2.13625 0.666748 2.66669 0.666748H8.66669C9.19712 0.666748 9.70583 0.877462 10.0809 1.25253C10.456 1.62761 10.6667 2.13631 10.6667 2.66675V3.33341C10.6667 3.7016 10.3682 4.00008 10 4.00008C9.63183 4.00008 9.33335 3.7016 9.33335 3.33341V2.66675C9.33335 2.48994 9.26312 2.32037 9.13809 2.19534C9.01307 2.07032 8.8435 2.00008 8.66669 2.00008H2.66669Z"
                fill="#52525B"
              />
            </G>
            <Defs>
              <ClipPath id="clip0_4681_1067">
                <Rect width="16" height="16" fill="white" />
              </ClipPath>
            </Defs>
          </Svg>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconButton, isMenuPressed && styles.iconButtonCopied]}
          onPress={handleMenuPress}
          activeOpacity={0.6}
        >
          <Text style={styles.menuIcon}>⋮</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 8,
    width: 343,
    height: 76,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    alignSelf: 'stretch',
  },
  containerNew: {
    borderColor: '#4B5E2D',
  },
  leftSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: 1,
    gap: 4,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  faviconContainer: {
    width: 16,
    height: 16,
    borderRadius: 4,
    backgroundColor: '#E8EFD8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  faviconText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#4B5E2D',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#171717',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statsText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#52525B',
  },
  dot: {
    fontSize: 14,
    color: '#737373',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  iconButtonCopied: {
    backgroundColor: '#E8EFD8',
  },
  menuIcon: {
    fontSize: 18,
    color: '#666666',
    fontWeight: '600',
  },
});
