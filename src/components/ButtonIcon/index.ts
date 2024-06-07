import { factory } from '../factory';
import type { ButtonIconVariants } from './types';
import type { IconProps } from '../Icon/types';
import SVG from '../Icon/Component';

export type { ButtonIconFactoryConfiguration } from './types';

export const ButtonIcon = factory<IconProps, ButtonIconVariants>(
  SVG,
  'buttonIcon'
);
