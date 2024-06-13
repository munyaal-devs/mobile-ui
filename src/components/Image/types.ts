import type { ComponentConfiguration, VariantProps } from '../../types';
import type {
  ImageProps as NativeImageProps,
  ImageStyle as NativeImageStyle,
} from 'react-native';

export type ImageFactoryConfiguration = ComponentConfiguration<
  NativeImageStyle,
  NativeImageProps
>;

export type ImageProps = VariantProps & NativeImageProps;
