import { factory } from '../factory';
import { TextInput as NativeTextInput } from 'react-native';
import type { InputFieldProps } from './types';

export type { InputFieldFactoryConfiguration, InputFieldProps } from './types';

export const InputField = factory<InputFieldProps>(
  NativeTextInput,
  'inputField'
);
