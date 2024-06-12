import { factory } from '../factory';
import SVG from '../Icon/Component';
import type { IconProps } from './types';

export type { IconFactoryConfiguration, IconProps } from './types';

export const Icon = factory<IconProps>(SVG, 'icon');
