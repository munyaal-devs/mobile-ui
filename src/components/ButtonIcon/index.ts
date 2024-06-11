import { factory } from '../factory';
import type { ButtonIconVariants } from './types';
import type { IconProps as NativeIconProps } from '../Icon/types';
import SVG from '../Icon/Component';
import type { ComponentVariantProps } from '../../types';

export type { ButtonIconFactoryConfiguration } from './types';

export type ButtonIconProps = ComponentVariantProps<ButtonIconVariants> &
  NativeIconProps;

export const ButtonIcon = factory<ButtonIconProps>(SVG, 'buttonIcon');
