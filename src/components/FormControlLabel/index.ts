import { factory } from '../factory';
import { Text as NativeText } from 'react-native';
import type { FormControlLabelProps } from './types';

export type {
  FormControlLabelFactoryConfiguration,
  FormControlLabelProps,
} from './types';

export const FormControlLabel = factory<FormControlLabelProps>(
  NativeText,
  'formControlLabel'
);
