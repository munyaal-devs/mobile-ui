import { factory } from '../factory';
import { ScrollView as NativeScrollView } from 'react-native';
import type { ScrollViewProps } from './types';

export type { ScrollViewFactoryConfiguration, ScrollViewProps } from './types';

export const ScrollView = factory<ScrollViewProps>(
  NativeScrollView,
  'scrollView'
);
