import { factory } from '../factory';
import type { TextInputProps as NativeTextInputProps } from 'react-native';
import { TextInput as NativeTextInput } from 'react-native';
import type { ComponentVariantProps } from '../../types';

export type { InputFieldFactoryConfiguration } from './types';

export type InputFieldProps = ComponentVariantProps & NativeTextInputProps;

export const InputField = factory<InputFieldProps>(
  NativeTextInput,
  'inputField'
);
