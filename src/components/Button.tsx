import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Colors from '../colors';
import Text from './Text';

interface CustomProps {
  type: 'primary' | 'red' | 'green';
  title: string;
}

export type CustomButtonProps = TouchableOpacityProps & CustomProps;

const Button: React.FunctionComponent<CustomButtonProps> = ({
  style,
  type,
  title,
  ...props
}) => {
  let backgroundColor = Colors.Primary;

  switch (type) {
    case 'green':
      backgroundColor = Colors.Green;
      break;
    case 'red':
      backgroundColor = Colors.Red;
      break;
    default:
      break;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...props}
      style={StyleSheet.flatten([
        style,
        {
          padding: 12,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor,
          borderRadius: 4,
        },
      ])}>
      <Text type="secondary" size={19}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
