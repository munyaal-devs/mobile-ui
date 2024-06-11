import { factory } from '../factory';
import type { TextProps as NativeTextProps } from 'react-native';
import { Text as NativeText } from 'react-native';
import type { ComponentVariantProps, TextSpecificStyles } from '../../types';
import type { TextVariants } from './types';

export type { TextFactoryConfiguration } from './types';

export type TextProps = ComponentVariantProps<TextVariants> &
  NativeTextProps &
  TextSpecificStyles;

export const Text = factory<TextProps>(NativeText, 'text');
