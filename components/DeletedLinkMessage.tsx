import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function DeletedLinkMessage() {
  return (
    <View style={styles.container}>
      <Feather name="check" size={18} color="#E74C3C" />
      <Text style={styles.text}>Link deleted</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: '#E74C3C',
    gap: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
  },
});
