import { type ComponentConfiguration, type Styles } from '../utils';
import { default as Svg, type IconProps } from '../components/Icon';
import { factoryComponent } from '../builder';

export type ButtonIconVariants = {
  size: {
    sm: Styles;
    md: Styles;
    lg: Styles;
  };
};

const config: ComponentConfiguration<IconProps, ButtonIconVariants> = {
  variants: {
    size: {
      sm: {
        width: '$4',
        height: '$4',
      },
      md: {
        width: '$4.5',
        height: '$4.5',
      },
      lg: {
        width: '$5',
        height: '$5',
      },
    },
  },
  defaultProps: {
    size: 'md',
    fill: '$text50',
  },
};

export const ButtonIcon = factoryComponent<IconProps, ButtonIconVariants, {}>(
  Svg,
  config
);
