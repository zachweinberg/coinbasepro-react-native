import React from 'react';
import styled from 'styled-components/native';
import Colors from '../colors';

interface TextProps {
  children: React.ReactNode;
  color?: string;
  margin?: string;
  padding?: string;
  title?: boolean;
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  tiny?: boolean;
  center?: boolean;
  right?: boolean;
}

const TextStyle: React.FunctionComponent<TextProps> = ({
  ...props
}: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};

const Text = styled.Text<TextProps>`
  color: ${(props) => props.color ?? Colors.Primary};
  margin: ${(props) => props.margin ?? 0};
  padding: ${(props) => props.padding ?? 0};

  ${(props) => {
    const { title, large, medium, small, tiny } = props;

    switch (true) {
      case title:
        return `font-size: 32px`;
      case title:
        return `font-size: 32px`;
      case title:
        return `font-size: 32px`;
      case title:
        return `font-size: 32px`;
      case title:
        return `font-size: 32px`;
    }
  }}

  ${(props) => {
    const { right, center } = props;

    switch (true) {
      case center:
        return `text-align: center`;
      case right:
        return 'text-align: right';
      default:
        return 'text-align: left';
    }
  }}
`;

export default TextStyle;
