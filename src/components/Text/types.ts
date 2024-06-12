import type {
  BasicSizes,
  ComponentConfiguration,
  VariantProps,
  FontWeights,
  StylePipe,
  TextSpecificStyles,
} from '../../types';
import type { TextProps as NativeTextProps, TextStyle } from 'react-native';

export type TextVariants = {
  size: {
    [key in keyof BasicSizes]: StylePipe<TextStyle>;
  };
  weight: {
    [key in keyof FontWeights]: StylePipe<TextStyle>;
  };
};

export type TextFactoryConfiguration = ComponentConfiguration<
  TextStyle,
  NativeTextProps,
  TextVariants
>;

export type TextProps = VariantProps<TextVariants> &
  NativeTextProps &
  TextSpecificStyles;
