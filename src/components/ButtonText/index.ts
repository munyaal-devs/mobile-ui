import { factory } from '../factory';
import { Text as NativeText } from 'react-native';
import type { ButtonTextProps } from './types';

export type { ButtonTextFactoryConfiguration, ButtonTextProps } from './types';

export const ButtonText = factory<ButtonTextProps>(NativeText, 'buttonText');
