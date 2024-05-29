import { Text as TextNative, type TextProps } from 'react-native';
import { factoryComponent } from '../builder';
import type { ComponentConfiguration } from '../utils';

const config: ComponentConfiguration<TextProps> = {
  color: '$text800',
  fontSize: '$lg',
  marginBottom: '$1',
  fontWeight: '$light',
};

export const FormControlLabel = factoryComponent<TextProps>(TextNative, config);
