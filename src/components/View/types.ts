import type { BasicSizes, ComponentConfiguration, Styles } from '../../types';
import type { ViewProps, ViewStyle } from 'react-native';

export type ViewShadowVariants = {
  [key in keyof BasicSizes]: Styles<ViewStyle>;
};

export type ViewVariants = {
  shadow: ViewShadowVariants;
};

export type ViewFactoryConfiguration = ComponentConfiguration<
  ViewStyle,
  ViewProps,
  ViewVariants
>;
