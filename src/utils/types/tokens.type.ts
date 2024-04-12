import { type TextStyle } from 'react-native';

export type Sizes = {
  'xs': number;
  'sm': number;
  'md': number;
  'lg': number;
  'xl': number;
  '2xl': number;
  '3xl': number;
  '4xl': number;
  '5xl': number;
  '6xl': number;
};

export type FontSizes = {
  [key in keyof Sizes]: TextStyle['fontSize'];
};

export type FontWeights = {
  light: TextStyle['fontWeight'];
  normal: TextStyle['fontWeight'];
  medium: TextStyle['fontWeight'];
  semibold: TextStyle['fontWeight'];
  bold: TextStyle['fontWeight'];
};

export type LineHeights = {
  [key in keyof Sizes]: TextStyle['lineHeight'];
};

export type LetterSpacings = {
  [key in keyof Sizes]: TextStyle['letterSpacing'];
};

export type Tokens = {
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  lineHeights: LineHeights;
  letterSpacings: LetterSpacings;
};
