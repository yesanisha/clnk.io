import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface ProfileIdentityProps {
  name: string;
  bio: string;
  profileImageUri?: string | ImageSourcePropType;
  onEditPress?: () => void;
  onNamePress?: () => void;
}

export default function ProfileIdentity({
  name,
  bio,
  profileImageUri,
  onEditPress,
  onNamePress,
}: ProfileIdentityProps) {
  return (
    <View style={styles.container}>
      {/* Top Row: Profile Photo and Name */}
      <View style={styles.topRow}>
        {/* Profile Photo with Edit Button */}
        <View style={styles.profilePhotoContainer}>
          {profileImageUri ? (
            <Image
              source={typeof profileImageUri === 'string' ? { uri: profileImageUri } : profileImageUri}
              style={styles.profilePhoto}
            />
          ) : (
            <View style={styles.profilePhoto}>
              <Text style={styles.profileInitial}>{name.charAt(0).toUpperCase()}</Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.editButton}
            onPress={onEditPress}
            activeOpacity={0.7}
          >
            <Feather name="edit-2" size={12} color="#334155" />
          </TouchableOpacity>
        </View>

        {/* Name with Dropdown */}
        <TouchableOpacity
          style={styles.nameContainer}
          onPress={onNamePress}
          activeOpacity={0.7}
        >
          <Text style={styles.name}>{name}</Text>
          <View style={styles.chevronDown}>
            <View style={styles.chevronDownLeft} />
            <View style={styles.chevronDownRight} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Bio */}
      {bio && (
        <Text style={styles.bio} numberOfLines={2}>
          {bio}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 2,
    gap: 12,
    width: 343,
    height: 120,
    borderRadius: 12,
    opacity: 1,
    backgroundColor: 'transparent',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profilePhotoContainer: {
    position: 'relative',
  },
  profilePhoto: {
    width: 64,
    height: 64,
    borderRadius: 9999,
    backgroundColor: '#E8EFD8',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
  profileInitial: {
    fontSize: 28,
    fontWeight: '500',
    color: '#737373',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 28,
    letterSpacing: 0,
    color: '#171717',
  },
  chevronDown: {
    width: 16,
    height: 16,
    position: 'relative',
    flexShrink: 0,
  },
  chevronDownLeft: {
    position: 'absolute',
    width: 6,
    height: 1.5,
    backgroundColor: '#52525B',
    left: 3,
    top: 6,
    transform: [{ rotate: '45deg' }],
    borderRadius: 1,
  },
  chevronDownRight: {
    position: 'absolute',
    width: 6,
    height: 1.5,
    backgroundColor: '#52525B',
    right: 3,
    top: 6,
    transform: [{ rotate: '-45deg' }],
    borderRadius: 1,
  },
  bio: {
    fontSize: 14,
    lineHeight: 20,
    color: '#737373',
    alignSelf: 'stretch',
  },
});
