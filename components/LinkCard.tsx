import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

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

const ThreeDotsIcon = () => (
  <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.6667 20.0001C18.6667 19.2637 19.2637 18.6667 20.0001 18.6667C20.7365 18.6667 21.3334 19.2637 21.3334 20.0001C21.3334 20.7365 20.7365 21.3334 20.0001 21.3334C19.2637 21.3334 18.6667 20.7365 18.6667 20.0001Z"
      fill="#52525B"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.6667 15.3333C18.6667 14.597 19.2637 14 20.0001 14C20.7365 14 21.3334 14.597 21.3334 15.3333C21.3334 16.0697 20.7365 16.6667 20.0001 16.6667C19.2637 16.6667 18.6667 16.0697 18.6667 15.3333Z"
      fill="#52525B"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.6667 24.6666C18.6667 23.9302 19.2637 23.3333 20.0001 23.3333C20.7365 23.3333 21.3334 23.9302 21.3334 24.6666C21.3334 25.403 20.7365 25.9999 20.0001 25.9999C19.2637 25.9999 18.6667 25.403 18.6667 24.6666Z"
      fill="#52525B"
    />
  </Svg>
);

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
      return (
        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <Path
            d="M13.3335 7.99479C13.3335 5.04927 10.9457 2.66146 8.00016 2.66146C5.05464 2.66146 2.66683 5.04927 2.66683 7.99479C2.66683 10.9403 5.05464 13.3281 8.00016 13.3281C9.0947 13.3281 10.1122 12.9984 10.9589 12.4329L11.6986 13.5424C10.6403 14.2493 9.36836 14.6615 8.00016 14.6615C4.31826 14.6615 1.3335 11.6767 1.3335 7.99479C1.3335 4.31289 4.31826 1.32812 8.00016 1.32812C11.682 1.32812 14.6668 4.31289 14.6668 7.99479V8.99479C14.6668 10.2835 13.6222 11.3281 12.3335 11.3281C11.5307 11.3281 10.8226 10.9227 10.4027 10.3054C9.7963 10.9358 8.94403 11.3281 8.00016 11.3281C6.15922 11.3281 4.66683 9.83572 4.66683 7.99479C4.66683 6.15384 6.15922 4.66146 8.00016 4.66146C8.7507 4.66146 9.4433 4.90952 10.0005 5.32812H11.3335V8.99479C11.3335 9.54706 11.7812 9.99479 12.3335 9.99479C12.8858 9.99479 13.3335 9.54706 13.3335 8.99479V7.99479ZM8.00016 5.99479C6.89556 5.99479 6.00016 6.89019 6.00016 7.99479C6.00016 9.09939 6.89556 9.99479 8.00016 9.99479C9.10476 9.99479 10.0002 9.09939 10.0002 7.99479C10.0002 6.89019 9.10476 5.99479 8.00016 5.99479Z"
            fill="#52525B"
          />
        </Svg>
      );
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
        <ThreeDotsIcon />
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
    lineHeight: 20,
    letterSpacing: 0,
    color: '#171717', 
    fontFamily: 'Figtree',
  },
  value: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0,
    color: '#737373', 
    fontFamily: 'Figtree',
    overflow: 'hidden',
  },
  menuButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
});

const iconStyles = StyleSheet.create({
  textIcon: {
    fontSize: 14,
    color: '#52525B',
  },
});
