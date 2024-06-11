import { factory } from '../factory';
import type { TextProps as NativeTextProps } from 'react-native';
import { Text as NativeText } from 'react-native';
import type { ComponentVariantProps } from '../../types';

export type { FormControlLabelFactoryConfiguration } from './types';

export type FormControlLabelProps = ComponentVariantProps & NativeTextProps;

export const FormControlLabel = factory<FormControlLabelProps>(
  NativeText,
  'formControlLabel'
);
