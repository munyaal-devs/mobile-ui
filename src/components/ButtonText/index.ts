import { factory } from '../factory';
import type { TextProps } from 'react-native';
import { Text as NativeText } from 'react-native';
import type { ButtonTextVariants } from './types';
import type { ComponentVariantProps, TextSpecificStyles } from '../../types';

export type { ButtonTextFactoryConfiguration } from './types';

export type ButtonTextProps = ComponentVariantProps<ButtonTextVariants> &
  TextProps &
  TextSpecificStyles;

export const ButtonText = factory<ButtonTextProps>(NativeText, 'buttonText');
