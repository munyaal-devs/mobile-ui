import { View as NativeView, type ViewProps } from 'react-native';
import { factoryComponent } from '../builder';
import type {
  BasicSizes,
  ComponentConfiguration,
  Styles,
  ViewSpecificStyles,
} from '../types';

export type ViewVariants = {
  shadow: {
    [key in keyof BasicSizes]: Styles;
  };
};

const config: ComponentConfiguration<ViewProps, ViewVariants> = {
  variants: {
    shadow: {
      xs: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
      },
      sm: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
      },
      md: {
        shadowColor: '$background900',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
      },
      lg: {
        shadowColor: '$background900',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
      },
      xl: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
      },
    },
  },
};

export const View = factoryComponent<
  ViewProps,
  ViewVariants,
  ViewSpecificStyles
>(NativeView, config);
