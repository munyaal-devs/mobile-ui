import type {
  ComponentConfiguration,
  StylePipe,
  VariantProps,
} from '../../types';
import type {
  PressableProps as NativePressableProps,
  ViewStyle as NativeViewStyle,
} from 'react-native';

export type ButtonVariants = {
  size: {
    sm: StylePipe<NativeViewStyle>;
    md: StylePipe<NativeViewStyle>;
    lg: StylePipe<NativeViewStyle>;
  };
  variant: {
    solid: StylePipe<NativeViewStyle>;
    outline: StylePipe<NativeViewStyle>;
  };
};

export type ButtonFactoryConfiguration = ComponentConfiguration<
  NativeViewStyle,
  NativePressableProps,
  ButtonVariants
>;

export type ButtonProps = VariantProps<ButtonVariants> & NativePressableProps;
