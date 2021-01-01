import React from 'react';
import { StyleSheet, Text as BaseText, TextProps } from 'react-native';
import Colors from '../colors';

interface CustomProps {
  size: number;
  bold?: boolean;
  type: 'primary' | 'secondary' | 'tertiary' | 'green' | 'red';
}

export type CustomTextProps = TextProps & CustomProps;

const Text: React.FunctionComponent<CustomTextProps> = ({
  style,
  size,
  bold,
  type,
  ...props
}) => {
  const fontWeight = bold ? '600' : '400';

  let color = Colors.Primary;

  switch (type) {
    case 'green':
      color = Colors.Green;
      break;
    case 'red':
      color = Colors.Red;
      break;
    case 'primary':
      color = Colors.Primary;
      break;
    case 'secondary':
      color = Colors.Secondary;
      break;
    case 'tertiary':
      color = Colors.Tertiary;
      break;
    default:
      break;
  }

  return (
    <BaseText
      {...props}
      style={StyleSheet.flatten([
        { fontSize: size },
        style,
        { fontWeight },
        { color },
      ])}
    />
  );
};

export default Text;
