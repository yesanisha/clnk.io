import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { isValidUrl as validateUrl } from '../utils/linkUtils';

interface LongLinkInputProps {
  onShortenLink?: (url: string) => void;
}

export default function LongLinkInput({ onShortenLink }: LongLinkInputProps) {
  const [linkValue, setLinkValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');

  const isValid = validateUrl(linkValue);

  const handleShortenPress = () => {
    if (!isValid) {
      setError('Please enter a valid URL');
      return;
    }

    if (onShortenLink) {
      onShortenLink(linkValue.trim());
      setLinkValue('');
      setError('');
    }
  };

  const handleChangeText = (text: string) => {
    setLinkValue(text);
    if (error) {
      setError('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Label */}
        <Text style={styles.label}>Long link</Text>

        {/* Input Field */}
        <TextInput
          style={[
            styles.input,
            isFocused && styles.inputFocused,
            error && styles.inputError,
          ]}
          value={linkValue}
          onChangeText={handleChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Paste a link to shorten!"
          placeholderTextColor="#999999"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="url"
          returnKeyType="done"
          onSubmitEditing={handleShortenPress}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}

        {/* Shorten Button */}
        <TouchableOpacity
          style={[
            styles.button,
            isValid && styles.buttonActive,
          ]}
          onPress={handleShortenPress}
          disabled={!isValid}
          activeOpacity={0.8}
        >
          <Text style={[
            styles.buttonText,
            isValid && styles.buttonTextActive,
          ]}>
            Shorten link
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  card: {
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: '#000000',
    marginBottom: 16,
    height: 50,
  },
  inputFocused: {
    borderColor: '#6B9E6D',
  },
  inputError: {
    borderColor: '#E74C3C',
  },
  errorText: {
    fontSize: 13,
    color: '#E74C3C',
    marginTop: 4,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#B8D4B8',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
  },
  buttonActive: {
    backgroundColor: '#6B9E6D',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    opacity: 0.7,
  },
  buttonTextActive: {
    opacity: 1,
  },
});
