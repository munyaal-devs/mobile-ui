import type { BasicSizes, ComponentConfiguration, Styles } from '../../types';
import type { ViewProps, ViewStyle } from 'react-native';

export type VStackVariants = {
  space: {
    [key in keyof BasicSizes]: Styles<ViewStyle>;
  };
  reversed: {
    true: Styles<ViewStyle>;
  };
};

export type VStackFactoryConfiguration = ComponentConfiguration<
  ViewStyle,
  ViewProps,
  VStackVariants
>;
