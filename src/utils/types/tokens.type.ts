import { type TextStyle, type ViewStyle } from 'react-native';

export type BasicSizes = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export type ExtendedSizes = BasicSizes & {
  '2xl': number;
  '3xl': number;
  '4xl': number;
  '5xl': number;
  '6xl': number;
};

export type FontSizes = {
  [key in keyof ExtendedSizes]: TextStyle['fontSize'];
};

export type FontWeights = {
  light: TextStyle['fontWeight'];
  normal: TextStyle['fontWeight'];
  medium: TextStyle['fontWeight'];
  semibold: TextStyle['fontWeight'];
  bold: TextStyle['fontWeight'];
};

export type LineHeights = {
  [key in keyof ExtendedSizes]: TextStyle['lineHeight'];
};

export type LetterSpacings = {
  [key in keyof ExtendedSizes]: TextStyle['letterSpacing'];
};

export type BorderRadius = {
  [key in keyof BasicSizes]: ViewStyle['borderRadius'];
} & {
  none: ViewStyle['borderRadius'];
};

export type BorderRadiusKey = keyof BorderRadius;

export type BorderWidths = {
  '0': ViewStyle['borderWidth'];
  '1': ViewStyle['borderWidth'];
  '2': ViewStyle['borderWidth'];
  '4': ViewStyle['borderWidth'];
  '8': ViewStyle['borderWidth'];
};

export type Sizes = {
  '0': ViewStyle['width'];
  '0.5': ViewStyle['width'];
  '1': ViewStyle['width'];
  '1.5': ViewStyle['width'];
  '2': ViewStyle['width'];
  '2.5': ViewStyle['width'];
  '3': ViewStyle['width'];
  '3.5': ViewStyle['width'];
  '4': ViewStyle['width'];
  '4.5': ViewStyle['width'];
  '5': ViewStyle['width'];
  '6': ViewStyle['width'];
  '7': ViewStyle['width'];
  '8': ViewStyle['width'];
  '9': ViewStyle['width'];
  '10': ViewStyle['width'];
  '11': ViewStyle['width'];
  '12': ViewStyle['width'];
  '16': ViewStyle['width'];
  '18': ViewStyle['width'];
  '20': ViewStyle['width'];
  '24': ViewStyle['width'];
  '32': ViewStyle['width'];
  '40': ViewStyle['width'];
  '48': ViewStyle['width'];
  '56': ViewStyle['width'];
  '64': ViewStyle['width'];
  '72': ViewStyle['width'];
  '80': ViewStyle['width'];
  '96': ViewStyle['width'];
  '102': ViewStyle['width'];
  '1/2': ViewStyle['width'];
  '1/3': ViewStyle['width'];
  '2/3': ViewStyle['width'];
  '1/4': ViewStyle['width'];
  '2/4': ViewStyle['width'];
  '3/4': ViewStyle['width'];
  '1/5': ViewStyle['width'];
  '2/5': ViewStyle['width'];
  '3/5': ViewStyle['width'];
  '4/5': ViewStyle['width'];
  '1/6': ViewStyle['width'];
  '2/6': ViewStyle['width'];
  '3/6': ViewStyle['width'];
  '4/6': ViewStyle['width'];
  '5/6': ViewStyle['width'];
  'full': ViewStyle['width'];
};

export type SizeKey = keyof Sizes;

export type Spaces = {
  '0': ViewStyle['margin'];
  '0.5': ViewStyle['margin'];
  '1': ViewStyle['margin'];
  '1.5': ViewStyle['margin'];
  '2': ViewStyle['margin'];
  '2.5': ViewStyle['margin'];
  '3': ViewStyle['margin'];
  '3.5': ViewStyle['margin'];
  '4': ViewStyle['margin'];
  '4.5': ViewStyle['margin'];
  '5': ViewStyle['margin'];
  '6': ViewStyle['margin'];
  '7': ViewStyle['margin'];
  '8': ViewStyle['margin'];
  '9': ViewStyle['margin'];
  '10': ViewStyle['margin'];
  '11': ViewStyle['margin'];
  '12': ViewStyle['margin'];
  '16': ViewStyle['margin'];
  '18': ViewStyle['margin'];
  '20': ViewStyle['margin'];
  '24': ViewStyle['margin'];
  '32': ViewStyle['margin'];
  '40': ViewStyle['margin'];
  '48': ViewStyle['margin'];
  '56': ViewStyle['margin'];
  '64': ViewStyle['margin'];
  '72': ViewStyle['margin'];
  '80': ViewStyle['margin'];
  '96': ViewStyle['margin'];
  '102': ViewStyle['margin'];
};

export type SpaceKey = keyof Spaces;

export type Opacity = {
  0: ViewStyle['opacity'];
  5: ViewStyle['opacity'];
  10: ViewStyle['opacity'];
  20: ViewStyle['opacity'];
  25: ViewStyle['opacity'];
  30: ViewStyle['opacity'];
  40: ViewStyle['opacity'];
  50: ViewStyle['opacity'];
  60: ViewStyle['opacity'];
  70: ViewStyle['opacity'];
  75: ViewStyle['opacity'];
  80: ViewStyle['opacity'];
  90: ViewStyle['opacity'];
  95: ViewStyle['opacity'];
  100: ViewStyle['opacity'];
};

export type Tokens = {
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  lineHeights: LineHeights;
  letterSpacings: LetterSpacings;
  borderWidths: BorderWidths;
  borderRadius: BorderRadius;
  spaces: Spaces;
  sizes: Sizes;
  opacity: Opacity;
};
