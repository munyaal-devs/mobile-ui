import type { ComponentConfiguration, VariantProps } from '../../types';
import type {
  KeyboardAvoidingViewProps as NativeKeyboardAvoidingViewProps,
  ViewStyle as NativeViewStyle,
} from 'react-native';

export type KeyboardAvoidingViewFactoryConfiguration = ComponentConfiguration<
  NativeViewStyle,
  NativeKeyboardAvoidingViewProps
>;

export type KeyboardAvoidingViewProps = VariantProps &
  NativeKeyboardAvoidingViewProps;
