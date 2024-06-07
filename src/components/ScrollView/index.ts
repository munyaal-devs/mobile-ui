import { factory } from '../factory';
import type { ScrollViewProps } from 'react-native';
import { ScrollView as NativeScrollView } from 'react-native';

export type { ScrollViewFactoryConfiguration } from './types';

export const ScrollView = factory<ScrollViewProps>(
  NativeScrollView,
  'scrollView'
);
