import { factory } from '../factory';
import type { ViewProps as NativeViewProps } from 'react-native';
import { View as NativeView } from 'react-native';
import type { ComponentVariantProps } from '../../types';

export type { FormControlFactoryConfiguration } from './types';

export type FormControlProps = ComponentVariantProps & NativeViewProps;

export const FormControl = factory<FormControlProps>(NativeView, 'formControl');
