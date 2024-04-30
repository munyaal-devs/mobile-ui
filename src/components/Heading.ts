import type {
  BasicSizes,
  ComponentConfiguration,
  FontWeights,
  Styles,
  TextSpecificStyles,
} from '../utils';
import { factoryComponent } from '../builder';
import { Text as TextNative, type TextProps } from 'react-native';

export type HeadingVariants = {
  size: {
    [key in keyof BasicSizes]: Styles;
  };
  weight: {
    [key in keyof FontWeights]: Styles;
  };
};

const config: ComponentConfiguration<HeadingVariants> = {
  color: '$text900',
  letterSpacing: '$md',
  variants: {
    size: {
      xs: {
        fontSize: '$xl',
        lineHeight: '$xl',
      },
      sm: {
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },
      md: {
        fontSize: '$3xl',
        lineHeight: '$3xl',
      },
      lg: {
        fontSize: '$4xl',
        lineHeight: '$4xl',
      },
      xl: {
        fontSize: '$5xl',
        lineHeight: '$5xl',
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
