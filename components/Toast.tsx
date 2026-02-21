import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ToastProps {
  visible: boolean;
  message: string;
  type?: 'success' | 'error' | 'info';
  onHide?: () => void;
}

export default function Toast({
  visible,
  message,
  type = 'success',
  onHide,
}: ToastProps) {
  const opacity = React.useRef(new Animated.Value(0)).current;
  const translateY = React.useRef(new Animated.Value(-20)).current;

  useEffect(() => {
    if (visible) {
      // Fade in and slide down
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      // Auto hide after 2 seconds
      const timer = setTimeout(() => {
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: -20,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start(() => {
          if (onHide) onHide();
        });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!visible) return null;

  const renderIcon = () => {
    switch (type) {
      case 'success':
        return (
          <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.833344 9.99992C0.833344 4.93718 4.93727 0.833252 10 0.833252C15.0627 0.833252 19.1667 4.93718 19.1667 9.99992C19.1667 15.0627 15.0627 19.1666 10 19.1666C4.93727 19.1666 0.833344 15.0627 0.833344 9.99992ZM10 2.49992C5.85775 2.49992 2.50001 5.85766 2.50001 9.99992C2.50001 14.1422 5.85775 17.4999 10 17.4999C14.1423 17.4999 17.5 14.1422 17.5 9.99992C17.5 5.85766 14.1423 2.49992 10 2.49992Z"
              fill="#171717"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.0892 7.74408C13.4147 8.06951 13.4147 8.59715 13.0892 8.92259L9.75591 12.2559C9.43048 12.5814 8.90284 12.5814 8.5774 12.2559L6.91073 10.5893C6.5853 10.2638 6.5853 9.73618 6.91073 9.41074C7.23617 9.08531 7.76381 9.08531 8.08925 9.41074L9.16666 10.4882L11.9107 7.74408C12.2362 7.41864 12.7638 7.41864 13.0892 7.74408Z"
              fill="#171717"
            />
          </Svg>
        );
      case 'error':
        return <Text style={styles.icon}>✕</Text>;
      default:
        return <Text style={styles.icon}>i</Text>;
    }
  };

  return (
    <Animated.View
      style={[
        styles.container,
        { opacity, transform: [{ translateY }] },
      ]}
    >
      <View style={[styles.toast, type === 'error' && styles.toastError]}>
        {renderIcon()}
        <Text style={styles.message}>{message}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 72,
    left: '50%',
    marginLeft: -81,
    alignItems: 'center',
    zIndex: 3,
  },
  toast: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
    width: 162,
    height: 52,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 8,
  },
  toastError: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
  },
  icon: {
    fontSize: 18,
    color: '#171717',
  },
  message: {
    width: 295,
    height: 20,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#171717',
  },
});
