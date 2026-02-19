import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface HeaderProps {
  onSharePress?: () => void;
  onMorePress?: () => void;
  onProfilePress?: () => void;
  onLinksPress?: () => void;
}

export default function Header({
  onSharePress,
  onMorePress,
  onProfilePress,
  onLinksPress,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      {/* Left Section */}
      <View style={styles.leftSection}>
        <TouchableOpacity
          style={styles.profileCircle}
          onPress={onProfilePress}
          activeOpacity={0.7}
        >
          <Text style={styles.initial}>M</Text>
        </TouchableOpacity>

        <View style={styles.brandContainer}>
          <Text style={styles.brandName}>
            clnk<Text style={styles.brandDot}>.</Text>
          </Text>
          <TouchableOpacity
            style={styles.linksDropdown}
            onPress={onLinksPress}
            activeOpacity={0.7}
          >
            <Text style={styles.linksText}>Links</Text>
            <View style={styles.chevronDown}>
              <View style={styles.chevronDownLeft} />
              <View style={styles.chevronDownRight} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Right Section */}
      <View style={styles.rightSection}>
        <TouchableOpacity
          style={styles.shareButton}
          onPress={onSharePress}
          activeOpacity={0.7}
        >
          <Feather name="share-2" size={16} color="#4A5568" />
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.moreButton}
          onPress={onMorePress}
          activeOpacity={0.7}
        >
          <Text style={styles.moreIcon}>⋮</Text>
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
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileCircle: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initial: {
    fontSize: 18,
    fontWeight: '500',
    color: '#666666',
  },
  brandContainer: {
    gap: 2,
  },
  brandName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: -0.5,
    fontStyle: 'italic',
  },
  brandDot: {
    color: '#6B9E6D',
  },
  linksDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  linksText: {
    fontSize: 13,
    color: '#666666',
  },
  chevronDown: {
    width: 10,
    height: 6,
    position: 'relative',
    marginTop: 2,
  },
  chevronDownLeft: {
    position: 'absolute',
    width: 6,
    height: 1.5,
    backgroundColor: '#666666',
    left: 0,
    bottom: 0,
    transform: [{ rotate: '45deg' }],
    borderRadius: 1,
  },
  chevronDownRight: {
    position: 'absolute',
    width: 6,
    height: 1.5,
    backgroundColor: '#666666',
    right: 0,
    bottom: 0,
    transform: [{ rotate: '-45deg' }],
    borderRadius: 1,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  shareText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#4A5568',
  },
  moreButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreIcon: {
    fontSize: 20,
    color: '#4A5568',
    fontWeight: '600',
  },
});
