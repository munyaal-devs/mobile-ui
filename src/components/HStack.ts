import type { BasicSizes, ComponentConfiguration, Styles } from '../utils';
import { factoryComponent } from '../builder';
import { View as NativeView, type ViewProps } from 'react-native';
import type { ViewSpecificStyles } from '../utils';

export type HStackVariants = {
  space: {
    [key in keyof BasicSizes]: Styles;
  };
  reversed: {
    true: Styles;
  };
};

const config: ComponentConfiguration<HStackVariants> = {
  flexDirection: 'row',
  variants: {
    space: {
      xs: {
        gap: `$1`,
      },
      sm: {
        gap: `$2`,
      },
      md: {
        gap: `$3`,
      },
      lg: {
        gap: `$4`,
      },
      xl: {
        gap: `$5`,
      },
    },
    reversed: {
      true: {
        flexDirection: 'row-reverse',
      },
    },
  },
  defaultProps: {
    space: 'md',
  },
};

export const HStack = factoryComponent<
  ViewProps,
  HStackVariants,
  ViewSpecificStyles
>(NativeView, config);
