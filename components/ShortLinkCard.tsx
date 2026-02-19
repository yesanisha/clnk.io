import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
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
  return (
    <View style={[
      styles.container,
      link.isNew && styles.containerNew,
    ]}>
      {/* Left Section */}
      <View style={styles.leftSection}>
        {/* Favicon */}
        <View style={styles.faviconContainer}>
          <Text style={styles.faviconText}>
            {(link.title || 'L').charAt(0).toUpperCase()}
          </Text>
        </View>

        {/* Content */}
        <View style={styles.contentContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {link.title || 'Link'}
          </Text>
          <View style={styles.statsRow}>
            <FontAwesome name="mouse-pointer" size={12} color="#999999" />
            <Text style={styles.statsText}>{link.clicks || 0}</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.statsText}>{link.shortUrl}</Text>
          </View>
        </View>
      </View>

      {/* Right Section - Actions */}
      <View style={styles.rightSection}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => onCopyPress?.(link)}
          activeOpacity={0.6}
        >
          <View style={styles.copyIcon}>
            <View style={styles.copySquare1} />
            <View style={styles.copySquare2} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => onMenuPress?.(link)}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 18,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  containerNew: {
    borderColor: '#6B9E6D',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  faviconContainer: {
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
  contentContainer: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statsText: {
    fontSize: 13,
    color: '#999999',
  },
  dot: {
    fontSize: 13,
    color: '#999999',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyIcon: {
    width: 18,
    height: 18,
    position: 'relative',
  },
  copySquare1: {
    width: 14,
    height: 14,
    borderWidth: 1.5,
    borderColor: '#666666',
    borderRadius: 3,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#F8F8F8',
  },
  copySquare2: {
    width: 14,
    height: 14,
    borderWidth: 1.5,
    borderColor: '#666666',
    borderRadius: 3,
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#F8F8F8',
  },
  menuIcon: {
    fontSize: 18,
    color: '#666666',
    fontWeight: '600',
  },
});
