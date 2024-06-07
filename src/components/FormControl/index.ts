import { factory } from '../factory';
import type { ViewProps } from 'react-native';
import { View as NativeView } from 'react-native';

export type { FormControlFactoryConfiguration } from './types';

export const FormControl = factory<ViewProps>(NativeView, 'formControl');
