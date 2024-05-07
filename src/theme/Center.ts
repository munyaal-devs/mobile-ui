import { factoryComponent } from '../builder';
import { View as NativeView, type ViewProps } from 'react-native';
import type { ComponentConfiguration } from '../utils';

const config: ComponentConfiguration<ViewProps, {}> = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const Center = factoryComponent<ViewProps, {}, {}>(NativeView, config);
