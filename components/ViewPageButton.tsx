import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface ViewPageButtonProps {
  onPress?: () => void;
}

export default function ViewPageButton({ onPress }: ViewPageButtonProps) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Feather name="eye" size={18} color="#2D3748" />
        <Text style={styles.text}>View Page</Text>
        <Feather name="chevron-down" size={16} color="#2D3748" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#A8C5A0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A8C5A0',
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
  },
});
