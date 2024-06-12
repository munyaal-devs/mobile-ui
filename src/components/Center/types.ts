import type { ComponentConfiguration, VariantProps } from '../../types';
import type {
  ViewProps,
  ViewProps as NativeViewProps,
  ViewStyle,
} from 'react-native';

export type CenterFactoryConfiguration = ComponentConfiguration<
  ViewStyle,
  ViewProps
>;

export type CenterProps = VariantProps & NativeViewProps;
