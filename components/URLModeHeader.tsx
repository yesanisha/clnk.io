import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface URLModeHeaderProps {
  onProfilePress?: () => void;
  onModePress?: () => void;
  currentMode?: 'Links' | 'URL';
}

export default function URLModeHeader({
  onProfilePress,
  onModePress,
  currentMode = 'URL',
}: URLModeHeaderProps) {
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
          <Text style={styles.brandName}>clnk.</Text>
          <TouchableOpacity
            style={styles.modeDropdown}
            onPress={onModePress}
            activeOpacity={0.7}
          >
            <Text style={styles.modeText}>{currentMode}</Text>
            <View style={styles.chevronDown}>
              <View style={styles.chevronDownLeft} />
              <View style={styles.chevronDownRight} />
            </View>
          </TouchableOpacity>
        </View>
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
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileCircle: {
    width: 44,
    height: 44,
    borderRadius: 12,
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
  },
  modeDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  modeText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#6B9E6D',
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
    backgroundColor: '#6B9E6D',
    left: 0,
    bottom: 0,
    transform: [{ rotate: '45deg' }],
    borderRadius: 1,
  },
  chevronDownRight: {
    position: 'absolute',
    width: 6,
    height: 1.5,
    backgroundColor: '#6B9E6D',
    right: 0,
    bottom: 0,
    transform: [{ rotate: '-45deg' }],
    borderRadius: 1,
  },
});
