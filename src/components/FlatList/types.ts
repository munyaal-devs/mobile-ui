import type { ComponentConfiguration, VariantProps } from '../../types';
import type {
  FlatListProps as NativeFlatListProps,
  ViewStyle as NativeViewStyle,
} from 'react-native';

export type FlatListFactoryConfiguration = ComponentConfiguration<
  NativeViewStyle,
  NativeFlatListProps<any>
>;

export type FlatListProps<ItemT> = VariantProps & NativeFlatListProps<ItemT>;
