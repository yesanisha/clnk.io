import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface URLModeHeaderProps {
  onProfilePress?: () => void;
  onModePress?: () => void;
  currentMode?: 'Links' | 'URL';
}

export default function URLModeHeader({
  onProfilePress,
  onModePress,
  currentMode = 'URL',
}: URLModeHeaderProps) {
  return (
    <View style={styles.container}>
      {/* Left Section */}
      <View style={styles.leftSection}>
        <TouchableOpacity
          style={styles.profileCircle}
          onPress={onProfilePress}
          activeOpacity={0.7}
        >
          <Text style={styles.initial}>M</Text>
        </TouchableOpacity>

        <View style={styles.brandContainer}>
          <Svg width="49" height="16" viewBox="0 0 49 16" fill="none">
            <Path
              d="M45.6747 15.6213C45.0889 15.6213 44.6108 15.4186 44.2403 15.0131C43.8749 14.6025 43.7222 14.1044 43.7823 13.5187C43.8423 12.9479 44.1002 12.4598 44.5557 12.0543C45.0163 11.6488 45.5395 11.446 46.1253 11.446C46.681 11.446 47.1441 11.6488 47.5145 12.0543C47.89 12.4598 48.0477 12.9479 47.9876 13.5187C47.9476 13.9092 47.8099 14.2646 47.5746 14.585C47.3443 14.9004 47.0589 15.1532 46.7185 15.3435C46.3831 15.5287 46.0351 15.6213 45.6747 15.6213Z"
              fill="#4B5E2D"
            />
            <Path
              d="M35.3873 12.646L36.2283 7.71978H36.769L40.2234 3.84487H44.8794L39.2021 9.88252H38.0306L35.3873 12.646ZM31.2119 15.3795L33.7652 0H37.9105L35.3572 15.3795H31.2119ZM38.331 15.3795L36.4386 10.8137L39.6527 7.86997L43.0771 15.3795H38.331Z"
              fill="#171717"
            />
            <Path
              d="M23.5028 8.89385L22.4214 15.3821H18.2761L20.1986 3.84746H24.1336L23.7732 6.04023H23.8933C24.2588 5.3043 24.792 4.73108 25.4929 4.32056C26.1988 3.90503 26.9773 3.69727 27.8283 3.69727C28.6444 3.69727 29.3228 3.8825 29.8635 4.25297C30.4041 4.62344 30.7871 5.13409 31.0124 5.78491C31.2377 6.43573 31.2778 7.18168 31.1326 8.02274L29.901 15.3821H25.7557L26.8371 8.89385C26.9322 8.32313 26.8621 7.87506 26.6268 7.54964C26.3965 7.22423 26.016 7.06153 25.4854 7.06153C25.1499 7.06153 24.842 7.13662 24.5617 7.28681C24.2863 7.432 24.056 7.64226 23.8708 7.91761C23.6906 8.18795 23.5679 8.51337 23.5028 8.89385Z"
              fill="#171717"
            />
            <Path
              d="M19.3919 0L16.8387 15.3795H12.6934L15.2466 0H19.3919Z"
              fill="#171717"
            />
            <Path
              d="M6.10081 15.5923C4.84921 15.5923 3.81789 15.3445 3.00685 14.8489C2.19582 14.3483 1.62759 13.6524 1.30217 12.7612C0.976756 11.8651 0.914176 10.8263 1.11443 9.6448C1.30468 8.4633 1.71019 7.42699 2.33099 6.53586C2.95679 5.63973 3.75782 4.94384 4.73406 4.44822C5.71532 3.94758 6.83175 3.69727 8.08335 3.69727C9.2148 3.69727 10.1585 3.90253 10.9145 4.31305C11.6754 4.71856 12.2186 5.29429 12.5441 6.04023C12.8745 6.78117 12.9596 7.65227 12.7994 8.65354H8.95447C8.99952 8.05278 8.9019 7.5922 8.66159 7.27179C8.42629 6.95139 8.08335 6.79118 7.63277 6.79118C7.2623 6.79118 6.92186 6.89632 6.61147 7.10658C6.30608 7.31184 6.04324 7.62474 5.82296 8.04527C5.60768 8.4608 5.44998 8.98396 5.34985 9.61476C5.24972 10.2456 5.23721 10.7712 5.3123 11.1918C5.39241 11.6073 5.54761 11.9202 5.7779 12.1304C6.0132 12.3357 6.31108 12.4383 6.67154 12.4383C6.98194 12.4383 7.26731 12.3682 7.52764 12.2281C7.79298 12.0829 8.02077 11.8726 8.21101 11.5973C8.40626 11.3169 8.55395 10.9765 8.65408 10.576H12.499C12.3088 11.5973 11.9258 12.4834 11.35 13.2343C10.7743 13.9853 10.0409 14.566 9.14972 14.9765C8.25858 15.3871 7.24227 15.5923 6.10081 15.5923Z"
              fill="#171717"
            />
          </Svg>
          <TouchableOpacity
            style={styles.modeDropdown}
            onPress={onModePress}
            activeOpacity={0.7}
          >
            <Text style={styles.modeText}>{currentMode}</Text>
            <View style={styles.chevronDown}>
              <View style={styles.chevronDownLeft} />
              <View style={styles.chevronDownRight} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 343,
    height: 52,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    opacity: 1,
    backgroundColor: 'transparent',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileCircle: {
    width: 36,
    height: 36,
    borderRadius: 6,
    backgroundColor: '#E4E4E7',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initial: {
    fontSize: 16,
    fontWeight: '400',
    color: '#737373',
    textAlign: 'center',
  },
  brandContainer: {
    gap: 4,
  },
  modeDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderRadius: 6,
  },
  modeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4B5E2D',
  },
  chevronDown: {
    width: 12,
    height: 12,
    position: 'relative',
  },
  chevronDownLeft: {
    position: 'absolute',
    width: 6,
    height: 1.5,
    backgroundColor: '#4B5E2D',
    left: 1.5,
    top: 5,
    transform: [{ rotate: '45deg' }],
    borderRadius: 1,
  },
  chevronDownRight: {
    position: 'absolute',
    width: 6,
    height: 1.5,
    backgroundColor: '#4B5E2D',
    right: 1.5,
    top: 5,
    transform: [{ rotate: '-45deg' }],
    borderRadius: 1,
  },
});
