import { factory } from '../factory';
import type { TextProps as NativeTextProps } from 'react-native';
import { Text as NativeText } from 'react-native';
import type { HeadingVariants } from './types';
import type { ComponentVariantProps, TextSpecificStyles } from '../../types';

export type { HeadingFactoryConfiguration } from './types';

export type HeadingProps = ComponentVariantProps<HeadingVariants> &
  NativeTextProps &
  TextSpecificStyles;

export const Heading = factory<HeadingProps>(NativeText, 'heading');
