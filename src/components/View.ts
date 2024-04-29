import { factoryComponent } from '../builder';
import { View as NativeView, type ViewProps } from 'react-native';
import type { ComponentConfiguration } from '../utils';
import type { SpecificStyles } from '../utils/types/specific.styles.type';

const config: ComponentConfiguration<{}> = {};

export const View = factoryComponent<ViewProps, {}, SpecificStyles>(
  NativeView,
  config
);
