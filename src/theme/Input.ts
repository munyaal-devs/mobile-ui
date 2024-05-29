import { View as ViewNative, type ViewProps } from 'react-native';
import { factoryComponent } from '../builder';
import type { ComponentConfiguration, Styles } from '../utils';

export type FormControlInputVariants = {
  isInvalid: {
    true: Styles;
  };
};

const config: ComponentConfiguration<ViewProps, FormControlInputVariants> = {
  borderBottomWidth: '$1',
  borderBottomColor: '$primary500',
  paddingVertical: '$1',
  paddingHorizontal: '$1',
  flexDirection: 'row',
  alignItems: 'center',
  overflow: 'hidden',
  gap: '$2',
  variants: {
    isInvalid: {
      true: {
        borderBottomColor: '$error600',
      },
    },
  },
};

export const Input = factoryComponent<ViewProps, FormControlInputVariants>(
  ViewNative,
  config
);
