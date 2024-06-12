import type {
  BasicSizes,
  ComponentConfiguration,
  VariantProps,
  StylePipe,
  ViewSpecificStyles,
} from '../../types';
import type { ViewProps as NativeViewProps, ViewStyle } from 'react-native';

export type ViewShadowVariants = {
  [key in keyof BasicSizes]: StylePipe<ViewStyle>;
};

export type ViewVariants = {
  shadow: ViewShadowVariants;
};

export type ViewFactoryConfiguration = ComponentConfiguration<
  ViewStyle,
  NativeViewProps,
  ViewVariants
>;

export type ViewProps = VariantProps<ViewVariants> &
  NativeViewProps &
  ViewSpecificStyles;
