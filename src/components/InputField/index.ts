import { factory } from '../factory';
import {
  TextInput as NativeTextInput,
  type TextInputProps,
} from 'react-native';

export type { InputFieldFactoryConfiguration } from './types';

export const InputField = factory<TextInputProps>(
  NativeTextInput,
  'inputField'
);
