import { factory } from '../factory';
import { View as NativeView } from 'react-native';
import type { HStackProps } from './types';

export type { HStackFactoryConfiguration, HStackProps } from './types';

export const HStack = factory<HStackProps>(NativeView, 'hStack');
