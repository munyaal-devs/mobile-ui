import type {
  BasicSizes,
  ComponentConfiguration,
  VariantProps,
  FontWeights,
  StylePipe,
  TextSpecificStyles,
} from '../../types';
import type {
  TextProps,
  TextProps as NativeTextProps,
  TextStyle,
} from 'react-native';

export type HeadingVariants = {
  size: {
    [key in keyof BasicSizes]: StylePipe<TextStyle>;
  };
  weight: {
    [key in keyof FontWeights]: StylePipe<TextStyle>;
  };
};

export type HeadingFactoryConfiguration = ComponentConfiguration<
  TextStyle,
  TextProps,
  HeadingVariants
>;

export type HeadingProps = VariantProps<HeadingVariants> &
  NativeTextProps &
  TextSpecificStyles;
