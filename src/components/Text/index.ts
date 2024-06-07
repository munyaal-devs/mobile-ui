import { factory } from '../factory';
import type { TextProps } from 'react-native';
import { Text as NativeText } from 'react-native';
import type { TextSpecificStyles } from '../../types';
import type { TextVariants } from './types';

export type { TextFactoryConfiguration } from './types';

export const Text = factory<TextProps, TextVariants, TextSpecificStyles>(
  NativeText,
  'text'
);
