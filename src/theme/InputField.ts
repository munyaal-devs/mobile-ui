import {
  TextInput as TextInputNative,
  type TextInputProps,
} from 'react-native';
import { factoryComponent } from '../builder';
import type { ComponentConfiguration } from '../utils';

const config: ComponentConfiguration<TextInputProps> = {
  flex: 1,
  fontSize: '$lg',
};

export const InputField = factoryComponent<TextInputProps>(
  TextInputNative,
  config
);
