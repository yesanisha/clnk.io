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
        <Feather name="eye" size={16} color="#4B5E2D" />
        <Text style={styles.text}>View Page</Text>
        <Feather name="chevron-up" size={16} color="#4B5E2D" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 0,
    gap: 16,
    position: 'absolute',
    width: '100%',
    maxWidth: 425,
    height: 48,
    left: 0,
    right: 0,
    bottom: 20,
    backgroundColor: '#D3E0B6',
    shadowColor: '#0000001A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 21,
    elevation: 8,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    zIndex: 4,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    paddingHorizontal: 16,
    gap: 6,
    width: 375,
    height: 48,
    alignSelf: 'stretch',
    flexShrink: 0,
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4B5E2D',
  },
});
