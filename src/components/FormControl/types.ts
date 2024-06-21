import type { ComponentConfiguration, VariantProps } from '../../types';
import type {
  ViewProps as NativeViewProps,
  ViewStyle as NativeViewStyle,
} from 'react-native';

export type FormControlState = {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isFocused?: boolean;
};

export type FormControlStateKeys = keyof FormControlState;

export type FormControlFactoryConfiguration = ComponentConfiguration<
  NativeViewStyle,
  NativeViewProps,
  never,
  FormControlStateKeys
>;

export type FormControlProps = VariantProps & NativeViewProps;
