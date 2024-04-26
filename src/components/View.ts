import { factoryComponent } from '../builder/factory.component';
import { View as ViewNative, type ViewProps } from 'react-native';
import type { ComponentConfiguration } from '../utils';

const config: ComponentConfiguration<{}> = {};

export const View = factoryComponent<ViewProps, {}>(ViewNative, config);
