import { factory } from '../factory';
import type { FormControlProps } from './types';
import NativeFormControl from './Component';

export type {
  FormControlFactoryConfiguration,
  FormControlProps,
} from './types';

export const FormControl = factory<FormControlProps>(
  NativeFormControl,
  'formControl'
);
