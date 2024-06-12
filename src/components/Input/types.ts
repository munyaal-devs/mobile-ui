import type { ComponentConfiguration, VariantProps } from '../../types';
import type {
  ViewProps as NativeViewProps,
  ViewStyle as NativeViewStyle,
} from 'react-native';
import type { FormControlStateKeys } from '../../providers/FormControlProvider/types';

export type InputFactoryConfiguration = ComponentConfiguration<
  NativeViewStyle,
  NativeViewProps,
  never,
  FormControlStateKeys
>;

export type InputProps = VariantProps & NativeViewProps;
