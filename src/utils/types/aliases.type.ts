import type { ViewStyle as NativeViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

export type PaddingStyle = Pick<
  NativeViewStyle,
  | 'padding'
  | 'paddingHorizontal'
  | 'paddingVertical'
  | 'paddingTop'
  | 'paddingBottom'
  | 'paddingRight'
  | 'paddingLeft'
>;

export type MarginStyle = Pick<
  NativeViewStyle,
  | 'margin'
  | 'marginHorizontal'
  | 'marginVertical'
  | 'marginTop'
  | 'marginBottom'
  | 'marginRight'
  | 'marginLeft'
>;

export type DimensionsStyle = Pick<
  NativeViewStyle,
  'borderRadius' | 'height' | 'width' | 'backgroundColor'
>;

export type ViewStyle = PaddingStyle & MarginStyle & DimensionsStyle;

export type Aliases = { [key: string]: keyof ViewStyle };
