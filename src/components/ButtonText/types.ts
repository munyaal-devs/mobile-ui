import type { ComponentConfiguration, Styles } from '../../types';
import type { TextProps, TextStyle } from 'react-native';

export type ButtonTextVariants = {
  size: {
    sm: Styles<TextStyle>;
    md: Styles<TextStyle>;
    lg: Styles<TextStyle>;
  };
};

export type ButtonTextFactoryConfiguration = ComponentConfiguration<
  TextStyle,
  TextProps,
  ButtonTextVariants
>;
