import { factory } from '../factory';
import type { TextProps } from 'react-native';
import { Text as NativeText } from 'react-native';

export type { FormControlLabelFactoryConfiguration } from './types';

export const FormControlLabel = factory<TextProps>(
  NativeText,
  'formControlLabel'
);
