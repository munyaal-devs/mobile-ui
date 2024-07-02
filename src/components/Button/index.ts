import { factory } from '../factory';
import type { ButtonProps } from './types';
import NativeButton from './Button';

export type { ButtonFactoryConfiguration, ButtonProps } from './types';

export const Button = factory<ButtonProps>(NativeButton, 'button');
