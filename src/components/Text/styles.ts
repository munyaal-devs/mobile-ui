import { StyleSheet } from 'react-native';
import type {
  TextStyleSheetAligns,
  TextStyleSheetSizes,
  TextStyleSheetWeights,
} from './types';

export const textAligns = StyleSheet.create<TextStyleSheetAligns>({
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
});

export const fontSizes = StyleSheet.create<TextStyleSheetSizes>({
  lg: {
    lineHeight: 24,
    fontSize: 16,
  },
  md: {
    lineHeight: 20,
    fontSize: 13.33,
  },
  sm: {
    lineHeight: 16,
    fontSize: 11.11,
  },
  xs: {
    lineHeight: 14,
    fontSize: 10.11,
  },
});

export const fontWeights = StyleSheet.create<TextStyleSheetWeights>({
  light: {
    fontWeight: '300',
    fontStyle: 'normal',
  },
  normal: {
    fontWeight: '400',
    fontStyle: 'normal',
  },
  medium: {
    fontWeight: '500',
    fontStyle: 'normal',
  },
  semibold: {
    fontWeight: '600',
    fontStyle: 'normal',
  },
  bold: {
    fontWeight: '700',
    fontStyle: 'normal',
  },
});
