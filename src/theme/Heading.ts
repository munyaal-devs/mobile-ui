import { Text as TextNative, type TextProps } from 'react-native';
import { factoryComponent } from '../builder';
import type {
  BasicSizes,
  ComponentConfiguration,
  FontWeights,
  Styles,
  TextSpecificStyles,
} from '../types';

export type HeadingVariants = {
  size: {
    [key in keyof BasicSizes]: Styles;
  };
  weight: {
    [key in keyof FontWeights]: Styles;
  };
};

const config: ComponentConfiguration<TextProps, HeadingVariants> = {
  color: '$text900',
  variants: {
    size: {
      xs: {
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      sm: {
        fontSize: '$xl',
        lineHeight: '$xl',
      },
      md: {
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },
      lg: {
        fontSize: '$3xl',
        lineHeight: '$3xl',
      },
      xl: {
        fontSize: '$4xl',
        lineHeight: '$4xl',
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

export const Heading = factoryComponent<
  TextProps,
  HeadingVariants,
  TextSpecificStyles
>(TextNative, config);
