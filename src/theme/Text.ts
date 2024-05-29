import { Text as TextNative, type TextProps } from 'react-native';
import { factoryComponent } from '../builder';
import type {
  BasicSizes,
  ComponentConfiguration,
  FontWeights,
  Styles,
  TextSpecificStyles,
} from '../utils';

export type TextVariants = {
  size: {
    [key in keyof BasicSizes]: Styles;
  };
  weight: {
    [key in keyof FontWeights]: Styles;
  };
};

const config: ComponentConfiguration<TextProps, TextVariants> = {
  color: '$text800',
  variants: {
    size: {
      xs: {
        fontSize: '$xs',
        lineHeight: '$xs',
      },
      sm: {
        fontSize: '$sm',
        lineHeight: '$sm',
      },
      md: {
        fontSize: '$md',
        lineHeight: '$md',
      },
      lg: {
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      xl: {
        fontSize: '$xl',
        lineHeight: '$xl',
      },
    },
    weight: {
      light: { fontWeight: '$light' },
      medium: { fontWeight: '$medium' },
      normal: { fontWeight: '$normal' },
      semibold: { fontWeight: '$semibold' },
      bold: { fontWeight: '$bold' },
    },
  },
  defaultProps: {
    size: 'md',
    weight: 'medium',
  },
};

export const Text = factoryComponent<
  TextProps,
  TextVariants,
  TextSpecificStyles
>(TextNative, config);
