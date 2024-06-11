import { factory } from '../factory';
import SVG from '../Icon/Component';
import type { IconProps as NativeIconProps, IconVariants } from './types';
import type { ComponentVariantProps } from '../../types';

export type IconProps = ComponentVariantProps<IconVariants> & NativeIconProps;

export const Icon = factory<IconProps>(SVG, 'input');

export type { IconFactoryConfiguration } from './types';
