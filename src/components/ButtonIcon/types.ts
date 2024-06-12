import type { ViewStyle } from 'react-native';
import type {
  ComponentConfiguration,
  VariantProps,
  StylePipe,
} from '../../types';
import type { IconProps as NativeIconProps, IconProps } from '../Icon/types';

export type ButtonIconVariants = {
  size: {
    sm: StylePipe<ViewStyle>;
    md: StylePipe<ViewStyle>;
    lg: StylePipe<ViewStyle>;
  };
};

export type ButtonIconFactoryConfiguration = ComponentConfiguration<
  ViewStyle,
  IconProps,
  ButtonIconVariants
>;

export type ButtonIconProps = VariantProps<ButtonIconVariants> &
  NativeIconProps;
