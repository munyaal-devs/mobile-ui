import {
  type BasicSizes,
  type ComponentConfiguration,
  type Styles,
} from '../types';
import { default as Svg, type IconProps } from '../components/Icon';
import { factoryComponent } from '../builder';

export type IconVariants = {
  size: {
    [key in keyof BasicSizes]: Styles;
  };
};

const config: ComponentConfiguration<IconProps, IconVariants> = {
  variants: {
    size: {
      xs: {
        width: '$4',
        height: '$4',
      },
      sm: {
        width: '$6',
        height: '$6',
      },
      md: {
        width: '$8',
        height: '$8',
      },
      lg: {
        width: '$10',
        height: '$10',
      },
      xl: {
        width: '$12',
        height: '$12',
      },
    },
  },
  defaultProps: {
    size: 'md',
    fill: '$text900',
  },
};

export const Icon = factoryComponent<IconProps, IconVariants>(Svg, config);
