import { factory } from '../factory';
import { View as NativeView } from 'react-native';
import type { FormControlProps } from './types';

export type {
  FormControlFactoryConfiguration,
  FormControlProps,
} from './types';

export const FormControl = factory<FormControlProps>(NativeView, 'formControl');
