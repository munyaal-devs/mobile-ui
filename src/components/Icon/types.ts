import type { TextStyle, ViewProps, ViewStyle } from 'react-native';
import type {
  ColorKey,
  ComponentConfiguration,
  ExtendedSizes,
  Styles,
} from '../../types';

export type IconProps = {
  path: string;
  fill?: TextStyle['color'] | `$${ColorKey}`;
} & ViewProps;

export type IconVariants = {
  size: {
    [key in keyof ExtendedSizes]: Styles<ViewStyle>;
  };
};

export type IconFactoryConfiguration = ComponentConfiguration<
  ViewStyle,
  IconProps,
  IconVariants
>;
