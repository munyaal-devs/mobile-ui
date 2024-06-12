import type { ComponentConfiguration, VariantProps } from '../../types';
import type {
  ViewProps as NativeViewProps,
  ViewStyle as NativeViewStyle,
} from 'react-native';
import type { FormControlStateKeys } from '../../providers/FormControlProvider/types';

export type FormControlFactoryConfiguration = ComponentConfiguration<
  NativeViewStyle,
  NativeViewProps,
  never,
  FormControlStateKeys
>;

export type FormControlProps = VariantProps & NativeViewProps;
