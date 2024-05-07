import { factoryComponent } from '../builder';
import { View as NativeView, type ViewProps } from 'react-native';
import type {
  BasicSizes,
  ComponentConfiguration,
  Styles,
  ViewSpecificStyles,
} from '../utils';

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
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },
      sm: {
        shadowColor: 'black',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 6,
      },
      md: {
        shadowColor: '$background900',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 9,
      },
      lg: {
        shadowColor: '$background900',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 12,
      },
      xl: {
        shadowColor: 'black',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 15,
      },
    },
  },
};

export const View = factoryComponent<
  ViewProps,
  ViewVariants,
  ViewSpecificStyles
>(NativeView, config);
