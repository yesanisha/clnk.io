import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface AddLinksSectionProps {
  onAddLink?: (type: 'link' | 'phone' | 'email' | 'whatsapp') => void;
}

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
          <Text style={styles.buttonIcon}>+</Text>
          <Text style={styles.buttonText}>Link</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onAddLink?.('phone')}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonIcon}>+</Text>
          <Text style={styles.buttonText}>Phone</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onAddLink?.('email')}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonIcon}>+</Text>
          <Text style={styles.buttonText}>Email</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onAddLink?.('whatsapp')}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonIcon}>+</Text>
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
    backgroundColor: '#E4E4E7',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    minHeight: 40,
  },
  buttonIcon: {
    fontSize: 16,
    color: '#52525B',
    fontWeight: '500',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#52525B',
    textAlign: 'center',
  },
});
