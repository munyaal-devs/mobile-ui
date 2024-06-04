import { TouchableOpacity, type TouchableOpacityProps } from 'react-native';
import { factoryComponent } from '../builder';
import type {
  ComponentConfiguration,
  Styles,
  ViewSpecificStyles,
} from '../types';

export type ButtonVariants = {
  size: {
    sm: Styles;
    md: Styles;
    lg: Styles;
  };
  action: {
    primary: Styles;
    secondary: Styles;
  };
};

const config: ComponentConfiguration<TouchableOpacityProps, ButtonVariants> = {
  borderRadius: '$sm',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  variants: {
    size: {
      sm: {
        paddingVertical: '$2',
        paddingHorizontal: '$2.5',
      },
      md: {
        paddingVertical: '$2.5',
        paddingHorizontal: '$3',
      },
      lg: {
        paddingVertical: '$3',
        paddingHorizontal: '$3.5',
      },
    },
    action: {
      primary: {
        backgroundColor: '$primary500',
        borderColor: '$primary500',
        borderWidth: '$1',
      },
      secondary: {
        borderColor: '$primary500',
        borderWidth: '$1',
      },
    },
  },
  defaultProps: {
    size: 'md',
    action: 'primary',
    activeOpacity: 0.7,
  },
};

export const Button = factoryComponent<
  TouchableOpacityProps,
  ButtonVariants,
  ViewSpecificStyles
>(TouchableOpacity, config);
