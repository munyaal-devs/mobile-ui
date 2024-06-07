import { factory } from '../factory';
import type { TextProps } from 'react-native';
import { Text as NativeText } from 'react-native';

export type { FormControlHelperTextFactoryConfiguration } from './types';

export const FormControlHelperText = factory<TextProps>(
  NativeText,
  'formControlHelperText'
);
