import type { FC } from 'react';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button: FC = () => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <Text>Hello World</Text>
    </TouchableOpacity>
  );
};

export default Button;
