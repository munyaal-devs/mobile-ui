import { factory } from '../factory';
import { View as NativeView } from 'react-native';
import type { ViewProps } from './types';

export { shadows } from './shadows';
export type { ViewFactoryConfiguration, ViewProps } from './types';

export const View = factory<ViewProps>(NativeView, 'view');
