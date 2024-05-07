import { factoryComponent } from '../builder';
import { View as NativeView, type ViewProps } from 'react-native';
import type { ComponentConfiguration, Styles } from '../utils';

export type DividerVariants = {
  orientation: {
    vertical: Styles;
    horizontal: Styles;
  };
};

const config: ComponentConfiguration<ViewProps, DividerVariants> = {
  backgroundColor: '$background200',

  variants: {
    orientation: {
      vertical: {
        width: '$0.5',
        height: '$full',
      },
      horizontal: {
        height: '$0.5',
        width: '$full',
      },
    },
  },

  defaultProps: {
    orientation: 'horizontal',
  },
};

export const Divider = factoryComponent<ViewProps, {}, {}>(NativeView, config);
