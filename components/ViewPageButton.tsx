import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

interface ViewPageButtonProps {
  onPress?: () => void;
}

const EyeIcon = () => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <G clipPath="url(#clip0_4603_1458)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.07452 8.00008C2.1292 8.10492 2.2014 8.23676 2.29157 8.38826C2.53424 8.79594 2.90292 9.33891 3.40516 9.87978C4.41003 10.962 5.91206 12.0001 7.99996 12.0001C10.0879 12.0001 11.5899 10.962 12.5948 9.87978C13.097 9.33891 13.4657 8.79594 13.7084 8.38826C13.7985 8.23676 13.8707 8.10492 13.9254 8.00008C13.8707 7.89524 13.7985 7.7634 13.7084 7.6119C13.4657 7.20423 13.097 6.66125 12.5948 6.12038C11.5899 5.03821 10.0879 4.00008 7.99996 4.00008C5.91206 4.00008 4.41003 5.03821 3.40516 6.12038C2.90292 6.66125 2.53424 7.20423 2.29157 7.6119C2.2014 7.7634 2.1292 7.89524 2.07452 8.00008ZM14.6666 8.00008C15.2794 7.73747 15.2793 7.7372 15.2792 7.73691L15.2782 7.73458L15.2762 7.73L15.2699 7.71581C15.2647 7.70415 15.2575 7.68816 15.2483 7.66812C15.2297 7.62804 15.203 7.5717 15.1679 7.50142C15.0976 7.36096 14.9935 7.16422 14.8541 6.92993C14.5759 6.4626 14.1529 5.83891 13.5718 5.21311C12.41 3.96195 10.5787 2.66675 7.99996 2.66675C5.4212 2.66675 3.58989 3.96195 2.4281 5.21311C1.847 5.83891 1.42402 6.4626 1.14585 6.92993C1.00639 7.16422 0.902292 7.36096 0.832062 7.50142C0.796922 7.5717 0.770186 7.62804 0.751673 7.66812C0.742415 7.68816 0.735206 7.70415 0.730025 7.71581L0.723768 7.73L0.721774 7.73458L0.721059 7.73624L0.720772 7.73691C0.720648 7.7372 0.720531 7.73747 1.33329 8.00008L0.720772 7.73691C0.6489 7.90461 0.64866 8.095 0.720531 8.26269L1.33329 8.00008C0.720531 8.26269 0.720408 8.26241 0.720531 8.26269L0.721059 8.26392L0.721774 8.26558L0.723768 8.27017L0.730025 8.28436C0.735206 8.29601 0.742415 8.312 0.751673 8.33205C0.770186 8.37212 0.796922 8.42847 0.832062 8.49875C0.902292 8.6392 1.00639 8.83595 1.14585 9.07024C1.42402 9.53756 1.847 10.1613 2.4281 10.787C3.58989 12.0382 5.4212 13.3334 7.99996 13.3334C10.5787 13.3334 12.41 12.0382 13.5718 10.787C14.1529 10.1613 14.5759 9.53756 14.8541 9.07024C14.9935 8.83595 15.0976 8.6392 15.1679 8.49875C15.203 8.42847 15.2297 8.37212 15.2483 8.33205C15.2575 8.312 15.2647 8.29601 15.2699 8.28436L15.2762 8.27017L15.2782 8.26558L15.2792 8.26325C15.2793 8.26297 15.2794 8.26269 14.6666 8.00008ZM14.6666 8.00008L15.2792 8.26325C15.351 8.09555 15.351 7.90461 15.2792 7.73691L14.6666 8.00008Z"
        fill="#4B5E2D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99992 6.66659C7.26354 6.66659 6.66659 7.26354 6.66659 7.99992C6.66659 8.7363 7.26354 9.33325 7.99992 9.33325C8.7363 9.33325 9.33325 8.7363 9.33325 7.99992C9.33325 7.26354 8.7363 6.66659 7.99992 6.66659ZM5.33325 7.99992C5.33325 6.52716 6.52716 5.33325 7.99992 5.33325C9.47268 5.33325 10.6666 6.52716 10.6666 7.99992C10.6666 9.47268 9.47268 10.6666 7.99992 10.6666C6.52716 10.6666 5.33325 9.47268 5.33325 7.99992Z"
        fill="#4B5E2D"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_4603_1458">
        <Rect width="16" height="16" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

const ChevronUpIcon = () => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.52851 5.52851C7.78886 5.26816 8.21097 5.26816 8.47132 5.52851L12.4713 9.52851C12.7317 9.78886 12.7317 10.211 12.4713 10.4713C12.211 10.7317 11.7889 10.7317 11.5285 10.4713L7.99992 6.94273L4.47132 10.4713C4.21097 10.7317 3.78886 10.7317 3.52851 10.4713C3.26816 10.211 3.26816 9.78886 3.52851 9.52851L7.52851 5.52851Z"
      fill="#4B5E2D"
    />
  </Svg>
);

export default function ViewPageButton({ onPress }: ViewPageButtonProps) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <View style={styles.leftContent}>
          <EyeIcon />
          <Text style={styles.text}>View Page</Text>
        </View>
        <ChevronUpIcon />
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 12, 
    paddingRight: 16, 
    paddingBottom: 12, 
    paddingLeft: 16, 
    position: 'absolute',
    width: '100%',
    maxWidth: 425,
    height: 80,
    left: 0,
    right: 0,
    bottom: 10,
    backgroundColor: '#D3E0B6',
    shadowColor: '#0000001A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 21,
    elevation: 8,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 4,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16, 
    paddingRight: 16, 
    width: 375, 
    height: 70, 
    alignSelf: 'stretch',
    flexShrink: 0,
    backgroundColor: 'transparent',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0,
    color: '#4B5E2D', 
    fontFamily: 'Figtree',
    width: 299, 
    height: 27, 
  },
});
