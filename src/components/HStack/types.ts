import type { BasicSizes, ComponentConfiguration, Styles } from '../../types';
import type { ViewProps, ViewStyle } from 'react-native';

export type HStackVariants = {
  space: {
    [key in keyof BasicSizes]: Styles<ViewStyle>;
  };
  reversed: {
    true: Styles<ViewStyle>;
  };
};

export type HStackFactoryConfiguration = ComponentConfiguration<
  ViewStyle,
  ViewProps,
  HStackVariants
>;
