import { factory } from '../factory';
import type { TextProps } from 'react-native';
import { Text as NativeText } from 'react-native';
import type { HeadingVariants } from './types';
import type { TextSpecificStyles } from '../../types';

export type { HeadingFactoryConfiguration } from './types';

export const Heading = factory<TextProps, HeadingVariants, TextSpecificStyles>(
  NativeText,
  'heading'
);
