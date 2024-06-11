import { factory } from '../factory';
import type { TextProps as NativeTextProps } from 'react-native';
import { Text as NativeText } from 'react-native';
import type { ComponentVariantProps } from '../../types';

export type { FormControlHelperTextFactoryConfiguration } from './types';

export type FormControlHelperTextProps = ComponentVariantProps &
  NativeTextProps;

export const FormControlHelperText = factory<FormControlHelperTextProps>(
  NativeText,
  'formControlHelperText'
);
