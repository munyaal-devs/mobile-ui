import { factory } from '../factory';
import type { KeyboardAvoidingViewProps } from './types';
import { KeyboardAvoidingView as NativeKeyboardAvoidingView } from 'react-native';

export type {
  KeyboardAvoidingViewFactoryConfiguration,
  KeyboardAvoidingViewProps,
} from './types';

export const KeyboardAvoidingView = factory<KeyboardAvoidingViewProps>(
  NativeKeyboardAvoidingView,
  'keyboardAvoidingView'
);
