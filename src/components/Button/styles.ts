import { StyleSheet } from 'react-native';
import type { ButtonStyleSheetSizes } from './types';

export const defaultStyles = StyleSheet.create({
  default: {
    elevation: 2,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  pressed: {
    elevation: 0,
    backgroundColor: '#2196F3',
  },
});

export const fontSizes = StyleSheet.create<ButtonStyleSheetSizes>({
  lg: {
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  md: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  sm: {
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
});
