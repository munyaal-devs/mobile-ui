import type { TextStyle, ViewProps, ViewStyle } from 'react-native';
import type {
  ColorKey,
  ComponentConfiguration,
  VariantProps,
  ExtendedSizes,
  StylePipe,
} from '../../types';

export type NativeIconProps = {
  path: string;
  fill?: TextStyle['color'] | `$${ColorKey}`;
} & ViewProps;

export type IconVariants = {
  size: {
    [key in keyof ExtendedSizes]: StylePipe<ViewStyle>;
  };
};

export type IconFactoryConfiguration = ComponentConfiguration<
  ViewStyle,
  IconProps,
  IconVariants
>;

export type IconProps = VariantProps<IconVariants> & NativeIconProps;
