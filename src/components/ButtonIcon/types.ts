import type { ViewStyle } from 'react-native';
import type { ComponentConfiguration, Styles } from '../../types';
import type { IconProps } from '../Icon/types';

export type ButtonIconVariants = {
  size: {
    sm: Styles<ViewStyle>;
    md: Styles<ViewStyle>;
    lg: Styles<ViewStyle>;
  };
};

export type ButtonIconFactoryConfiguration = ComponentConfiguration<
  ViewStyle,
  IconProps,
  ButtonIconVariants
>;
