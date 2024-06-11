import { factory } from '../factory';
import type { ViewProps as NativeViewProps } from 'react-native';
import { View as NativeView } from 'react-native';
import type { ComponentVariantProps } from '../../types';

export type { InputFactoryConfiguration } from './types';

export type InputProps = ComponentVariantProps & NativeViewProps;

export const Input = factory<InputProps>(NativeView, 'input');
