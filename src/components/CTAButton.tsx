import React, { ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { border, boxy } from '../atoms/styles';

interface CTAButtonProps {
  onPress?: () => void;
  children: ReactNode;
  buttonStyles?: StyleProp<ViewStyle>;
}

export const CTAButton = ({
  onPress,
  children,
  buttonStyles,
}: CTAButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, buttonStyles]}>
        <Text allowFontScaling={false} style={styles.text}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    ...border,
    ...boxy,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
