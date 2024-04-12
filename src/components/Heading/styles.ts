import { StyleSheet } from 'react-native';
import type {
  HeadingStyleSheetAligns,
  HeadingStyleSheetSizes,
  HeadingStyleSheetWeights,
} from './types';

export const textAligns = StyleSheet.create<HeadingStyleSheetAligns>({
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

export const fontSizes = StyleSheet.create<HeadingStyleSheetSizes>({
  '2xl': {
    fontSize: 47.78,
  },
  'xl': {
    fontSize: 39.81,
  },
  'lg': {
    fontSize: 33.18,
  },
  'md': {
    fontSize: 27.65,
  },
  'sm': {
    fontSize: 23.04,
  },
  'xs': {
    fontSize: 19.2,
  },
});

export const fontWeights = StyleSheet.create<HeadingStyleSheetWeights>({
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
