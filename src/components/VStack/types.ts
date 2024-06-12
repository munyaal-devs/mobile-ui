import type {
  BasicSizes,
  ComponentConfiguration,
  VariantProps,
  StylePipe,
  ViewSpecificStyles,
} from '../../types';
import type { ViewProps as NativeViewProps, ViewStyle } from 'react-native';

export type VStackVariants = {
  space: {
    [key in keyof BasicSizes]: StylePipe<ViewStyle>;
  };
  reversed: {
    true: StylePipe<ViewStyle>;
  };
};

export type VStackFactoryConfiguration = ComponentConfiguration<
  ViewStyle,
  NativeViewProps,
  VStackVariants
>;

export type VStackProps = VariantProps<VStackVariants> &
  NativeViewProps &
  ViewSpecificStyles;
