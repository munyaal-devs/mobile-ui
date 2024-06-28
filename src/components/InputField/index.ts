import { factory } from '../factory';
import type { InputFieldProps } from './types';
import NativeInputField from './Component';

export type { InputFieldFactoryConfiguration, InputFieldProps } from './types';

export const InputField = factory<InputFieldProps>(
  NativeInputField,
  'inputField'
);
