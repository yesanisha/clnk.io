import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export interface LinkData {
  id: string;
  type: 'website' | 'email' | 'linkedin' | 'phone' | 'custom';
  title: string;
  value: string;
}

interface LinkCardProps {
  link: LinkData;
  onPress?: (link: LinkData) => void;
  onMenuPress?: (link: LinkData) => void;
}

const renderIconForType = (type: string) => {
  switch (type) {
    case 'website':
      return (
        <View style={iconStyles.globeContainer}>
          <View style={iconStyles.globeCircle} />
          <View style={iconStyles.globeHorizontal} />
          <View style={iconStyles.globeVertical} />
        </View>
      );
    case 'email':
      return <Text style={iconStyles.textIcon}>@</Text>;
    case 'linkedin':
      return (
        <View style={iconStyles.linkedinContainer}>
          <Text style={iconStyles.linkedinText}>in</Text>
        </View>
      );
    case 'phone':
      return <Text style={iconStyles.textIcon}>☎</Text>;
    default:
      return <Text style={iconStyles.textIcon}>⚲</Text>;
  }
};

export default function LinkCard({ link, onPress, onMenuPress }: LinkCardProps) {
  const truncateValue = (value: string, maxLength: number = 40) => {
    if (value.length <= maxLength) return value;
    return value.substring(0, maxLength) + '...';
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress?.(link)}
      activeOpacity={0.7}
    >
      <View style={styles.leftSection}>
        <View style={styles.iconContainer}>
          {renderIconForType(link.type)}
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>{link.title}</Text>
          <Text style={styles.value} numberOfLines={1}>
            {truncateValue(link.value)}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => onMenuPress?.(link)}
        activeOpacity={0.7}
      >
        <Text style={styles.menuIcon}>⋮</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
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
  value: {
    fontSize: 14,
    color: '#666666',
  },
  menuButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  menuIcon: {
    fontSize: 18,
    color: '#666666',
    fontWeight: '600',
  },
});

const iconStyles = StyleSheet.create({
  globeContainer: {
    width: 20,
    height: 20,
    position: 'relative',
  },
  globeCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: '#4A5568',
    position: 'absolute',
    top: 1,
    left: 1,
  },
  globeHorizontal: {
    width: 18,
    height: 1,
    backgroundColor: '#4A5568',
    position: 'absolute',
    top: 9.5,
    left: 1,
  },
  globeVertical: {
    width: 1,
    height: 18,
    backgroundColor: '#4A5568',
    position: 'absolute',
    top: 1,
    left: 9.5,
  },
  linkedinContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkedinText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A5568',
  },
  textIcon: {
    fontSize: 18,
    color: '#4A5568',
  },
});
