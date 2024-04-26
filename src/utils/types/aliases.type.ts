import type { ViewStyle as NativeViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import type { BorderRadiusKey, SizeKey, SpaceKey } from './tokens.type';
import type { ColorKey } from './theme.type';

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

export type AliasKey =
  | 'bg'
  | 'h'
  | 'w'
  | 'p'
  | 'px'
  | 'py'
  | 'pt'
  | 'pb'
  | 'pr'
  | 'pl'
  | 'm'
  | 'mx'
  | 'my'
  | 'mt'
  | 'mb'
  | 'mr'
  | 'ml'
  | 'rounded';

export type Aliases = { [K in AliasKey]: keyof ViewStyle };

export type AliasStyle = {
  bg: ViewStyle['backgroundColor'] | `$${ColorKey}`;
  h: ViewStyle['height'] | `$${SizeKey}`;
  w: ViewStyle['width'] | `$${SizeKey}`;
  p: ViewStyle['padding'] | `$${SpaceKey}`;
  px: ViewStyle['paddingHorizontal'] | `$${SpaceKey}`;
  py: ViewStyle['paddingVertical'] | `$${SpaceKey}`;
  pt: ViewStyle['paddingTop'] | `$${SpaceKey}`;
  pb: ViewStyle['paddingBottom'] | `$${SpaceKey}`;
  pr: ViewStyle['paddingRight'] | `$${SpaceKey}`;
  pl: ViewStyle['paddingLeft'] | `$${SpaceKey}`;
  m: ViewStyle['margin'] | `$${SpaceKey}`;
  mx: ViewStyle['marginHorizontal'] | `$${SpaceKey}`;
  my: ViewStyle['marginVertical'] | `$${SpaceKey}`;
  mt: ViewStyle['marginTop'] | `$${SpaceKey}`;
  mb: ViewStyle['marginBottom'] | `$${SpaceKey}`;
  mr: ViewStyle['marginRight'] | `$${SpaceKey}`;
  ml: ViewStyle['marginLeft'] | `$${SpaceKey}`;
  rounded: ViewStyle['borderRadius'] | `$${BorderRadiusKey}`;
};
