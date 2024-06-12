import type {
  ComponentConfiguration,
  StylePipe,
  VariantProps,
} from '../../types';
import type {
  TouchableOpacityProps,
  ViewStyle as NativeViewStyle,
} from 'react-native';

export type ButtonVariants = {
  size: {
    sm: StylePipe<NativeViewStyle>;
    md: StylePipe<NativeViewStyle>;
    lg: StylePipe<NativeViewStyle>;
  };
  action: {
    solid: StylePipe<NativeViewStyle>;
    outline: StylePipe<NativeViewStyle>;
  };
};

export type ButtonFactoryConfiguration = ComponentConfiguration<
  NativeViewStyle,
  TouchableOpacityProps,
  ButtonVariants
>;

export type ButtonProps = VariantProps<ButtonVariants> & TouchableOpacityProps;
