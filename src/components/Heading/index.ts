import { factory } from '../factory';
import { Text as NativeText } from 'react-native';
import type { HeadingProps } from './types';

export type { HeadingFactoryConfiguration, HeadingProps } from './types';

export const Heading = factory<HeadingProps>(NativeText, 'heading');
