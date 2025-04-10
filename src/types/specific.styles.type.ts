import type { TextStyle, ViewStyle } from 'react-native';
import type { ColorKey, OpacityKey, SpaceKey } from './../types';

/**
 * Define las propiedades de estilos que pueden pasar directos como props de un componente View
 * */
export type ViewSpecificStyles = {
  flex?: ViewStyle['flex'];
  flexDirection?: ViewStyle['flexDirection'];
  direction?: ViewStyle['direction'];
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
  alignSelf?: ViewStyle['alignSelf'];
  alignContent?: ViewStyle['alignContent'];
  flexWrap?: ViewStyle['flexWrap'];
  flexBasis?: ViewStyle['flexBasis'];
  flexGrow?: ViewStyle['flexGrow'];
  flexShrink?: ViewStyle['flexShrink'];
  rowGap?: ViewStyle['rowGap'] | `$${SpaceKey}`;
  columnGap?: ViewStyle['columnGap'] | `$${SpaceKey}`;
  gap?: ViewStyle['gap'] | `$${SpaceKey}`;
  position?: ViewStyle['position'];
  opacity?: ViewStyle['opacity'] | `$${OpacityKey}`;
};

/**
 * Define las propiedades de estilos que pueden pasar directos como props de un componente Text
 * */
export type TextSpecificStyles = {
  color?: TextStyle['color'] | `$${ColorKey}`;
  textAlign?: TextStyle['textAlign'];
};

/**
 * Define las propiedades de estilos que pueden pasar directos como props
 * */
export type SpecificStyles = ViewSpecificStyles & TextSpecificStyles;

/**
 * Define las claves de las propiedades de estilos
 * */
export type SpecificStylesKey = keyof SpecificStyles;
