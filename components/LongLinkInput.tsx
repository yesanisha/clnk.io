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
    alignSelf: 'stretch',
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 16, // spacing/4
    gap: 16, // spacing/4 - between inside components
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#171717',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    paddingHorizontal: 12,
    gap: 8,
    height: 40,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: 6,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#737373',
    alignSelf: 'stretch',
  },
  inputFocused: {
    borderColor: '#4B5E2D',
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    paddingHorizontal: 16,
    gap: 8,
    height: 40,
    backgroundColor: '#4B5E2D',
    opacity: 0.5,
    borderRadius: 6,
    alignSelf: 'stretch',
  },
  buttonActive: {
    opacity: 1,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  buttonTextActive: {
    color: '#FFFFFF',
  },
});
