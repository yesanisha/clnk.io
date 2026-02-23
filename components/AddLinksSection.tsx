import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface AddLinksSectionProps {
  onAddLink?: (type: 'link' | 'phone' | 'email' | 'whatsapp') => void;
}

const PlusIcon = () => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.99992 2.66675C8.36811 2.66675 8.66659 2.96522 8.66659 3.33341V12.6667C8.66659 13.0349 8.36811 13.3334 7.99992 13.3334C7.63173 13.3334 7.33325 13.0349 7.33325 12.6667V3.33341C7.33325 2.96522 7.63173 2.66675 7.99992 2.66675Z"
      fill="#52525B"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.66675 7.99992C2.66675 7.63173 2.96522 7.33325 3.33341 7.33325H12.6667C13.0349 7.33325 13.3334 7.63173 13.3334 7.99992C13.3334 8.36811 13.0349 8.66659 12.6667 8.66659H3.33341C2.96522 8.66659 2.66675 8.36811 2.66675 7.99992Z"
      fill="#52525B"
    />
  </Svg>
);

export default function AddLinksSection({ onAddLink }: AddLinksSectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add up to 10 links</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onAddLink?.('link')}
          activeOpacity={0.7}
        >
          <PlusIcon />
          <Text style={styles.buttonText}>Link</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onAddLink?.('phone')}
          activeOpacity={0.7}
        >
          <PlusIcon />
          <Text style={styles.buttonText}>Phone</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onAddLink?.('email')}
          activeOpacity={0.7}
        >
          <PlusIcon />
          <Text style={styles.buttonText}>Email</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onAddLink?.('whatsapp')}
          activeOpacity={0.7}
        >
          <PlusIcon />
          <Text style={styles.buttonText}>WhatsApp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#52525B',
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    minWidth: 40,
    minHeight: 40,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#D4D4D8', // secondary-hover
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0,
    color: '#52525B', 
    textAlign: 'center',
    fontFamily: 'Figtree',
  },
});
