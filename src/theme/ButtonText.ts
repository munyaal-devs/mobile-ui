import type {
  ComponentConfiguration,
  Styles,
  TextSpecificStyles,
} from '../utils';
import { factoryComponent } from '../builder';
import {
  Text as TextNative,
  type TextProps as TextNativeProps,
} from 'react-native';

export type ButtonTextVariants = {
  size: {
    sm: Styles;
    md: Styles;
    lg: Styles;
  };
};

const config: ComponentConfiguration<TextNativeProps, ButtonTextVariants> = {
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
  TextNativeProps,
  ButtonTextVariants,
  TextSpecificStyles
>(TextNative, config);
