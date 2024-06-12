import { factory } from '../factory';
import { Text as NativeText } from 'react-native';
import type { TextProps } from './types';

export type { TextFactoryConfiguration, TextProps } from './types';

export const Text = factory<TextProps>(NativeText, 'text');
