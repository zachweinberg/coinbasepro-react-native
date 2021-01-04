import React from 'react';
import Colors from '../colors';
import {
  Text as BaseText,
  TextProps,
  TextStyle,
  StyleSheet,
} from 'react-native';

type VariantTypes = 'Label1' | 'Label2' | 'List1' | 'List2' | 'TextLabel';

const variants: Record<VariantTypes, TextStyle> = {
  Label1: {
    fontSize: 17,
    letterSpacing: 1.5,
    fontWeight: '500',
    color: '#373737',
  },
  Label2: {
    fontSize: 28,
    letterSpacing: 0,
  },
  List1: {
    fontSize: 17,
    fontWeight: '600',
    color: '#fff',
  },
  List2: {
    fontSize: 15,
    fontWeight: '600',
    color: '#575757',
    marginTop: 5,
  },
  TextLabel: {
    fontSize: 3,
  },
};

interface CustomTextProps extends TextProps {
  variant?: VariantTypes;
  color?: Colors;
  right?: boolean;
  center?: boolean;
}

const Text: React.FunctionComponent<CustomTextProps> = ({
  style,
  variant,
  color,
  right,
  center,
  ...props
}) => {
  return (
    <BaseText
      {...props}
      style={StyleSheet.flatten([
        { fontSize: 16 },
        style,
        { fontWeight: '400' },
        variant && variants[variant],
        color && { color },
        right && { textAlign: 'right' },
        center && { textAlign: 'center' },
      ])}
    />
  );
};

export default Text;
