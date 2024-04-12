import type { ForwardRefRenderFunction, PropsWithChildren } from 'react';
import {
  Text as NativeText,
  type TextProps as NativeTextProps,
} from 'react-native/Libraries/Text/Text';
import type { TextStyle } from 'react-native';

/**
 * Define una hoja de estilos por la alineación de texto
 * */
export type TextStyleSheetAligns = {
  left: TextStyle;
  right: TextStyle;
  center: TextStyle;
};

/**
 * Define una hoja de estilos por el peso del texto
 * */
export type TextStyleSheetWeights = {
  light: TextStyle;
  normal: TextStyle;
  medium: TextStyle;
  semibold: TextStyle;
  bold: TextStyle;
};
/**
 * Define una hoja de estilos por tamaño de texto
 * */
export type TextStyleSheetSizes = {
  lg: TextStyle;
  md: TextStyle;
  sm: TextStyle;
  xs: TextStyle;
};

/**
 * Define las propiedades personalizadas del componente
 * */
export type ComponentTextCustomProps = {
  size?: keyof TextStyleSheetSizes;
  weight?: keyof TextStyleSheetWeights;
  align?: keyof TextStyleSheetAligns;
};

/**
 * Define todas las propiedades personalizadas del componente
 * */
export type ComponentTextProps = PropsWithChildren<
  NativeTextProps & ComponentTextCustomProps
>;

/**
 * Define las propiedades que recibe el hook
 * */
export type UseComponentTextProps = Omit<ComponentTextProps, 'children'>;

/**
 * Define el ForwardComponent
 * */
export type ForwardComponentTextType = ForwardRefRenderFunction<
  NativeText,
  ComponentTextProps
>;
