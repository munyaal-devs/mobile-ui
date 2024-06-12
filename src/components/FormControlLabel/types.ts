import type { ComponentConfiguration, VariantProps } from '../../types';
import type {
  TextProps as NativeTextProps,
  TextStyle as NativeTextStyle,
} from 'react-native';
import type { FormControlStateKeys } from '../../providers/FormControlProvider/types';

export type FormControlLabelFactoryConfiguration = ComponentConfiguration<
  NativeTextStyle,
  NativeTextProps,
  never,
  FormControlStateKeys
>;

export type FormControlLabelProps = VariantProps & NativeTextProps;
