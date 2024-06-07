import { factory } from '../factory';
import type { ViewProps } from 'react-native';
import { View as NativeView } from 'react-native';
import type { DividerVariants } from '../Divider/types';

export type { CenterFactoryConfiguration } from './types';

export const Center = factory<ViewProps, DividerVariants>(NativeView, 'center');
