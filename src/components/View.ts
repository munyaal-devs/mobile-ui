import { factoryComponent } from '../builder';
import { View as NativeView, type ViewProps } from 'react-native';
import type { ComponentConfiguration, ViewSpecificStyles } from '../utils';

const config: ComponentConfiguration<{}> = {};

export const View = factoryComponent<ViewProps, {}, ViewSpecificStyles>(
  NativeView,
  config
);
