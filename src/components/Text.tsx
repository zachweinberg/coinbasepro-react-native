import React from 'react';
import {
  StyleSheet,
  Text as BaseText,
  TextProps,
  TextStyle,
} from 'react-native';
import Colors from '../colors';

type VariantTypes =
  | 'Label1'
  | 'Label2'
  | 'List1'
  | 'List2'
  | 'CurrencyLabel'
  | 'Currency'
  | 'Button';

const variants: Record<VariantTypes, TextStyle> = {
  Label1: {
    fontSize: 17,
    letterSpacing: 1.5,
    fontWeight: '500',
    color: '#373737',
  },
  Label2: {
    fontSize: 15,
    letterSpacing: 2,
    fontWeight: '500',
    color: '#858585',
    marginBottom: 12,
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
  CurrencyLabel: {
    fontSize: 14,
    color: '#989898',
  },
  Currency: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 7,
  },
  Button: {
    fontSize: 15,
    fontWeight: '700',
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
