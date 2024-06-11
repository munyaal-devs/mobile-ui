import { factory } from '../factory';
import type { TextProps as NativeTextProps } from 'react-native';
import { Text as NativeText } from 'react-native';
import type { ComponentVariantProps } from '../../types';

export type { FormControlErrorTextFactoryConfiguration } from './types';

export type FormControlErrorTextProps = ComponentVariantProps & NativeTextProps;

export const FormControlErrorText = factory<FormControlErrorTextProps>(
  NativeText,
  'formControlErrorText'
);
