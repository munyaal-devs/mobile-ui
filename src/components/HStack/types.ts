import type {
  BasicSizes,
  ComponentConfiguration,
  VariantProps,
  StylePipe,
  ViewSpecificStyles,
} from '../../types';
import type {
  ViewProps,
  ViewProps as NativeViewProps,
  ViewStyle,
} from 'react-native';

export type HStackVariants = {
  space: {
    [key in keyof BasicSizes]: StylePipe<ViewStyle>;
  };
  reversed: {
    true: StylePipe<ViewStyle>;
  };
};

export type HStackFactoryConfiguration = ComponentConfiguration<
  ViewStyle,
  ViewProps,
  HStackVariants
>;

export type HStackProps = VariantProps<HStackVariants> &
  NativeViewProps &
  ViewSpecificStyles;
