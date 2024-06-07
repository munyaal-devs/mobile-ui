import type { ComponentConfiguration, Styles } from '../../types';
import type { ViewProps, ViewStyle } from 'react-native';

export type DividerVariants = {
  orientation: {
    vertical: Styles<ViewStyle>;
    horizontal: Styles<ViewStyle>;
  };
};

export type DividerFactoryConfiguration = ComponentConfiguration<
  ViewStyle,
  ViewProps,
  DividerVariants
>;
