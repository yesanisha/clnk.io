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
            <Feather name="edit-2" size={14} color="#4A5568" />
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
      <Text style={styles.bio} numberOfLines={2}>
        {bio}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 16,
  },
  profilePhotoContainer: {
    position: 'relative',
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {
    fontSize: 32,
    fontWeight: '500',
    color: '#666666',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E8E8E8',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
  },
  chevronDown: {
    width: 10,
    height: 6,
    position: 'relative',
    marginTop: 8,
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
  bio: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666666',
    paddingLeft: 0,
  },
});
