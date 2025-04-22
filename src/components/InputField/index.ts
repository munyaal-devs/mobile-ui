import { factoryWithRef } from '../factory';
import type { InputFieldProps } from './types';
import NativeInputField from './Component';
import { TextInput } from 'react-native';

export type { InputFieldFactoryConfiguration, InputFieldProps } from './types';

export const InputField = factoryWithRef<InputFieldProps, TextInput>(
  NativeInputField,
  'inputField'
);
