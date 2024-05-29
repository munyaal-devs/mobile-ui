import { Text, type TextProps } from 'react-native';
import { factoryComponent } from '../builder';
import type { ComponentConfiguration } from '../utils';

const config: ComponentConfiguration<TextProps> = {
  color: '$error600',
  fontSize: '$sm',
  fontWeight: '$light',
};

export const FormControlErrorText = factoryComponent<TextProps>(Text, config);
