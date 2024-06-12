import type {
  ComponentConfiguration,
  VariantProps,
  StylePipe,
  TextSpecificStyles,
} from '../../types';
import type { TextProps, TextStyle } from 'react-native';

export type ButtonTextVariants = {
  size: {
    sm: StylePipe<TextStyle>;
    md: StylePipe<TextStyle>;
    lg: StylePipe<TextStyle>;
  };
};

export type ButtonTextFactoryConfiguration = ComponentConfiguration<
  TextStyle,
  TextProps,
  ButtonTextVariants
>;

export type ButtonTextProps = VariantProps<ButtonTextVariants> &
  TextProps &
  TextSpecificStyles;
