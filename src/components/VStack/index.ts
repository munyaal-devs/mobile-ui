import { factory } from '../factory';
import { View as NativeView } from 'react-native';
import type { VStackProps } from './types';

export type { VStackFactoryConfiguration, VStackProps } from './types';

export const VStack = factory<VStackProps>(NativeView, 'vStack');
