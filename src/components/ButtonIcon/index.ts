import { factory } from '../factory';
import type { ButtonIconProps } from './types';
import SVG from '../Icon/Component';

export type { ButtonIconFactoryConfiguration, ButtonIconProps } from './types';

export const ButtonIcon = factory<ButtonIconProps>(SVG, 'buttonIcon');
