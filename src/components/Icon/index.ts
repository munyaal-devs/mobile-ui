import { factory } from '../factory';
import SVG from '../Icon/Component';
import type { IconProps, IconVariants } from './types';

export const Icon = factory<IconProps, IconVariants>(SVG, 'input');

export type { IconFactoryConfiguration } from './types';
