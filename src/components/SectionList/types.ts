import type { ComponentConfiguration, VariantProps } from '../../types';
import type {
  SectionListProps as NativeSectionListProps,
  ViewStyle as NativeViewStyle,
} from 'react-native';

export type SectionListFactoryConfiguration = ComponentConfiguration<
  NativeViewStyle,
  NativeSectionListProps<any, any>
>;

export type SectionListProps<ItemT, SectionT> = VariantProps &
  NativeSectionListProps<ItemT, SectionT>;
