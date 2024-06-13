import { factory } from '../factory';
import { Image as NativeImage } from 'react-native';
import type { ImageProps } from './types';

export type { ImageProps, ImageFactoryConfiguration } from './types';

export const Image = factory<ImageProps>(NativeImage, 'image');
