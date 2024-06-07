import { factory } from '../factory';
import type { TextProps } from 'react-native';
import { Text as NativeText } from 'react-native';
import type { ButtonTextVariants } from './types';
import type { TextSpecificStyles } from '../../types';

export type { ButtonTextFactoryConfiguration } from './types';

export const ButtonText = factory<
  TextProps,
  ButtonTextVariants,
  TextSpecificStyles
>(NativeText, 'buttonText');
