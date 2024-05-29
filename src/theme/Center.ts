import { View as NativeView, type ViewProps } from 'react-native';
import { factoryComponent } from '../builder';
import type { ComponentConfiguration } from '../utils';

const config: ComponentConfiguration<ViewProps> = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const Center = factoryComponent<ViewProps>(NativeView, config);
