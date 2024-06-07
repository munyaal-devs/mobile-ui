import type { ComponentConfiguration, Styles } from '../../types';
import type { TouchableOpacityProps, ViewStyle } from 'react-native';

export type ButtonVariants = {
  size: {
    sm: Styles<ViewStyle>;
    md: Styles<ViewStyle>;
    lg: Styles<ViewStyle>;
  };
  action: {
    primary: Styles<ViewStyle>;
    secondary: Styles<ViewStyle>;
  };
};

export type ButtonFactoryConfiguration = ComponentConfiguration<
  ViewStyle,
  TouchableOpacityProps,
  ButtonVariants
>;
