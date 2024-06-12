import type {
  ScrollViewProps as NativeScrollViewProps,
  ViewStyle,
} from 'react-native';
import type { ComponentConfiguration, VariantProps } from '../../types';

export type ScrollViewFactoryConfiguration = ComponentConfiguration<
  ViewStyle,
  NativeScrollViewProps
>;

export type ScrollViewProps = VariantProps & NativeScrollViewProps;
