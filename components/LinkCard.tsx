import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

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
        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <Path
            d="M1.36621 8.66798H5.01816C5.13749 10.8472 5.83826 12.8716 6.968 14.5886C3.99174 14.1261 1.66673 11.6948 1.36621 8.66798ZM1.36621 7.33465C1.66673 4.30784 3.99174 1.87656 6.968 1.41406C5.83826 3.13109 5.13749 5.15546 5.01816 7.33465H1.36621ZM14.6337 7.33465H10.9817C10.8624 5.15546 10.1617 3.13109 9.03193 1.41406C12.0082 1.87656 14.3332 4.30784 14.6337 7.33465ZM14.6337 8.66798C14.3332 11.6948 12.0082 14.1261 9.03193 14.5886C10.1617 12.8716 10.8624 10.8472 10.9817 8.66798H14.6337ZM6.35378 8.66798H9.64613C9.53173 10.5232 8.94306 12.2502 7.99993 13.729C7.0568 12.2502 6.46819 10.5232 6.35378 8.66798ZM6.35378 7.33465C6.46819 5.47944 7.0568 3.75253 7.99993 2.27366C8.94306 3.75253 9.53173 5.47944 9.64613 7.33465H6.35378Z"
            fill="#52525B"
          />
        </Svg>
      );
    case 'email':
      return <Text style={iconStyles.textIcon}>@</Text>;
    case 'linkedin':
      return (
        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <Path
            d="M12.2242 12.226H10.4472V9.44147C10.4472 8.77747 10.4337 7.923 9.52121 7.923C8.59474 7.923 8.45321 8.64553 8.45321 9.39247V12.226H6.67621V6.5H8.38321V7.28047H8.40621C8.64474 6.83047 9.22474 6.3555 10.0912 6.3555C11.8917 6.3555 12.2247 7.54053 12.2247 9.083L12.2242 12.226ZM4.66923 5.7165C4.09723 5.7165 3.63773 5.2535 3.63773 4.684C3.63773 4.115 4.09773 3.6525 4.66923 3.6525C5.23923 3.6525 5.70123 4.115 5.70123 4.684C5.70123 5.2535 5.23873 5.7165 4.66923 5.7165ZM5.56023 12.226H3.77823V6.5H5.56023V12.226ZM13.1132 2H2.88623C2.39673 2 2.00073 2.387 2.00073 2.8645V13.1355C2.00073 13.6135 2.39673 14 2.88623 14H13.1117C13.6007 14 14.0007 13.6135 14.0007 13.1355V2.8645C14.0007 2.387 13.6007 2 13.1117 2H13.1132Z"
            fill="#52525B"
          />
        </Svg>
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
        <View style={styles.titleRow}>
          <View style={styles.iconContainer}>
            {renderIconForType(link.type)}
          </View>
          <Text style={styles.title}>{link.title}</Text>
        </View>
        <Text style={styles.value} numberOfLines={1}>
          {truncateValue(link.value)}
        </Text>
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
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    gap: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
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
  iconContainer: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#171717',
  },
  value: {
    fontSize: 14,
    fontWeight: '400',
    color: '#737373',
  },
  menuButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  menuIcon: {
    fontSize: 16,
    color: '#52525B',
    fontWeight: '600',
  },
});

const iconStyles = StyleSheet.create({
  textIcon: {
    fontSize: 14,
    color: '#52525B',
  },
});
