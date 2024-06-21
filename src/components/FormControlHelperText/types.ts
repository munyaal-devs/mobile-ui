import type { ComponentConfiguration, VariantProps } from '../../types';
import type {
  TextProps as NativeTextProps,
  TextStyle as NativeTextStyle,
} from 'react-native';
import type { FormControlStateKeys } from '../FormControl/types';

export type FormControlHelperTextFactoryConfiguration = ComponentConfiguration<
  NativeTextStyle,
  NativeTextProps,
  never,
  FormControlStateKeys
>;

export type FormControlHelperTextProps = VariantProps & NativeTextProps;
