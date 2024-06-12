import { factory } from '../factory';
import { Text as NativeText } from 'react-native';
import type { FormControlHelperTextProps } from './types';

export type {
  FormControlHelperTextFactoryConfiguration,
  FormControlHelperTextProps,
} from './types';

export const FormControlHelperText = factory<FormControlHelperTextProps>(
  NativeText,
  'formControlHelperText'
);
