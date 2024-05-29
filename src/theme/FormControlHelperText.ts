import { Text, type TextProps } from 'react-native';
import { factoryComponent } from '../builder';
import type { ComponentConfiguration } from '../utils';

const config: ComponentConfiguration<TextProps> = {
  color: '$text800',
  fontSize: '$sm',
  fontWeight: '$light',
};

export const FormControlHelperText = factoryComponent<TextProps>(Text, config);
