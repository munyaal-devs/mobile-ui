import type { KeyboardAvoidingViewFactoryConfiguration } from '@munyaal/mobile-ui';
import { Platform } from 'react-native';

export const keyboardAvoidingView: KeyboardAvoidingViewFactoryConfiguration = {
  defaultProps: {
    behavior: Platform.OS === 'ios' ? 'padding' : 'height',
  },
};
