import { Text, type TextProps } from 'react-native';
import { factoryComponent } from '../builder';
import type {
  ComponentConfiguration,
  Styles,
  TextSpecificStyles,
} from '../utils';

export type ButtonTextVariants = {
  size: {
    sm: Styles;
    md: Styles;
    lg: Styles;
  };
};

const config: ComponentConfiguration<TextProps, ButtonTextVariants> = {
  color: '$text50',
  fontWeight: '$light',
  variants: {
    size: {
      sm: {
        fontSize: '$md',
        lineHeight: '$md',
      },
      md: {
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      lg: {
        fontSize: '$xl',
        lineHeight: '$xl',
      },
    },
  },
  defaultProps: {
    size: 'md',
  },
};

export const ButtonText = factoryComponent<
  TextProps,
  ButtonTextVariants,
  TextSpecificStyles
>(Text, config);
