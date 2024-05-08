import type { ComponentConfiguration, TextSpecificStyles } from '../utils';
import { factoryComponent } from '../builder';
import {
  TextInput as TextInputNative,
  type TextInputProps,
} from 'react-native';

export type InputVariants = {};

const config: ComponentConfiguration<TextInputProps, InputVariants> = {
  variants: {},
  defaultProps: {},
};

export const Input = factoryComponent<
  TextInputProps,
  InputVariants,
  TextSpecificStyles
>(TextInputNative, config);
