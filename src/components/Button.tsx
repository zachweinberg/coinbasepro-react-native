import React from 'react';
import { ButtonProps, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../colors';
import Text from './Text';

type VariantTypes = 'Basic' | 'Buy' | 'Sell';

const variants: Record<VariantTypes, object> = {
  Basic: {
    backgroundColor: '#e3e3e3',
  },
  Buy: {
    backgroundColor: Colors.Green,
  },
  Sell: {
    backgroundColor: Colors.Red,
  },
};

interface CustomButtonProps extends ButtonProps {
  variant: VariantTypes;
  title: string;
  style?: any;
}

const Button: React.FunctionComponent<CustomButtonProps> = ({
  title,
  variant,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      {...props}
      style={StyleSheet.flatten([
        variant && variants[variant],
        {
          paddingVertical: 14,
          borderRadius: 7,
        },
        style,
      ])}>
      <Text variant="Button" center>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
