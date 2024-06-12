import { factory } from '../factory';
import { Text as NativeText } from 'react-native';
import type { FormControlErrorTextProps } from './types';

export type {
  FormControlErrorTextFactoryConfiguration,
  FormControlErrorTextProps,
} from './types';

export const FormControlErrorText = factory<FormControlErrorTextProps>(
  NativeText,
  'formControlErrorText'
);
