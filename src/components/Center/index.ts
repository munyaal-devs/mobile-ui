import { factory } from '../factory';
import { View as NativeView } from 'react-native';
import type { CenterProps } from './types';

export type { CenterFactoryConfiguration, CenterProps } from './types';

export const Center = factory<CenterProps>(NativeView, 'center');
