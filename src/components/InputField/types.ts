import type {
  TextInputProps as NativeTextInputProps,
  TextStyle as NativeTextStyle,
} from 'react-native';
import type { ComponentConfiguration, VariantProps } from '../../types';
import type { FormControlStateKeys } from '../FormControl/types';

export type InputFieldFactoryConfiguration = ComponentConfiguration<
  NativeTextStyle,
  NativeTextInputProps,
  never,
  FormControlStateKeys
>;

export type InputFieldProps = VariantProps & NativeTextInputProps;
