import type { ViewStyle as NativeViewStyle } from 'react-native';
import type { BorderRadiusKey, SizeKey, SpaceKey } from './tokens.type';
import type { ColorKey } from './colors.type';

/**
 * Define todas las propiedades de estilos relacionadas con el padding
 * */
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

/**
 * Define todas las propiedades de estilos relacionadas con el margin
 * */
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

/**
 * Define todas las propiedades de estilos relacionadas con las dimensiones
 * */
export type DimensionsStyle = Pick<
  NativeViewStyle,
  'borderRadius' | 'height' | 'width' | 'backgroundColor'
>;

/**
 * Junta todas las propiedades de estilos
 * */
export type ViewStyle = PaddingStyle & MarginStyle & DimensionsStyle;

/**
 * Define todas las abreviaturas de las propiedades de estilos
 * */
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

/**
 * Define los valores que pueden aceptar las abreviaturas
 * Los valores pueden ser directos o un valor establecido en la configuración
 * */
export type AliasStyle = {
  bg: DimensionsStyle['backgroundColor'] | `$${ColorKey}`;
  h: DimensionsStyle['height'] | `$${SizeKey}`;
  w: DimensionsStyle['width'] | `$${SizeKey}`;
  p: PaddingStyle['padding'] | `$${SpaceKey}`;
  px: PaddingStyle['paddingHorizontal'] | `$${SpaceKey}`;
  py: PaddingStyle['paddingVertical'] | `$${SpaceKey}`;
  pt: PaddingStyle['paddingTop'] | `$${SpaceKey}`;
  pb: PaddingStyle['paddingBottom'] | `$${SpaceKey}`;
  pr: PaddingStyle['paddingRight'] | `$${SpaceKey}`;
  pl: PaddingStyle['paddingLeft'] | `$${SpaceKey}`;
  m: MarginStyle['margin'] | `$${SpaceKey}`;
  mx: MarginStyle['marginHorizontal'] | `$${SpaceKey}`;
  my: MarginStyle['marginVertical'] | `$${SpaceKey}`;
  mt: MarginStyle['marginTop'] | `$${SpaceKey}`;
  mb: MarginStyle['marginBottom'] | `$${SpaceKey}`;
  mr: MarginStyle['marginRight'] | `$${SpaceKey}`;
  ml: MarginStyle['marginLeft'] | `$${SpaceKey}`;
  rounded: DimensionsStyle['borderRadius'] | `$${BorderRadiusKey}`;
};
