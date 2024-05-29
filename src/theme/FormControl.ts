import { View, type ViewProps } from 'react-native';
import { factoryComponent } from '../builder';
import type { ComponentConfiguration } from '../utils';

const config: ComponentConfiguration<ViewProps> = {
  flexDirection: 'column',
  gap: '$1',
};

export const FormControl = factoryComponent<ViewProps>(View, config);
