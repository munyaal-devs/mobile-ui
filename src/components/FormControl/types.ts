import type { ComponentConfiguration, VariantProps } from '../../types';
import type {
  ViewProps as NativeViewProps,
  ViewStyle as NativeViewStyle,
} from 'react-native';
import type { Dispatch, SetStateAction } from 'react';

export type FormControlState = {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
};

export type FormControlStateProvider = {
  isInvalid: boolean;
  isDisabled: boolean;
  isRequired: boolean;
  isReadOnly: boolean;
  isFocused: boolean;
  setIsFocused: Dispatch<SetStateAction<boolean>>;
};

export type FormControlStateKeys = keyof Omit<
  FormControlStateProvider,
  'setIsFocused'
>;

export type FormControlFactoryConfiguration = ComponentConfiguration<
  NativeViewStyle,
  NativeViewProps,
  {},
  FormControlStateKeys
>;

export type NativeFormControlProps = NativeViewProps & FormControlState;

export type FormControlProps = VariantProps & NativeFormControlProps;
