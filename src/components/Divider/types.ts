import type {
  ComponentConfiguration,
  StylePipe,
  VariantProps,
} from '../../types';
import type {
  ViewProps,
  ViewProps as NativeViewProps,
  ViewStyle,
} from 'react-native';

export type DividerVariants = {
  orientation: {
    vertical: StylePipe<ViewStyle>;
    horizontal: StylePipe<ViewStyle>;
  };
};

export type DividerFactoryConfiguration = ComponentConfiguration<
  ViewStyle,
  ViewProps,
  DividerVariants
>;

export type DividerProps = VariantProps<DividerVariants> & NativeViewProps;
