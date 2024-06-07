import type {
  BasicSizes,
  ComponentConfiguration,
  FontWeights,
  Styles,
} from '../../types';
import type { TextProps, TextStyle } from 'react-native';

export type TextVariants = {
  size: {
    [key in keyof BasicSizes]: Styles<TextStyle>;
  };
  weight: {
    [key in keyof FontWeights]: Styles<TextStyle>;
  };
};

export type TextFactoryConfiguration = ComponentConfiguration<
  TextStyle,
  TextProps,
  TextVariants
>;
