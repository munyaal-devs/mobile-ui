import type { ForwardRefRenderFunction, PropsWithChildren } from 'react';
import {
  Text as NativeText,
  type TextProps as NativeTextProps,
} from 'react-native/Libraries/Text/Text';
import type { TextStyle } from 'react-native';
/**
 * Define una hoja de estilos por la alineación de texto
 * */
export type HeadingStyleSheetAligns = {
  left: TextStyle;
  right: TextStyle;
  center: TextStyle;
};

/**
 * Define una hoja de estilos por el peso del texto
 * */
export type HeadingStyleSheetWeights = {
  light: TextStyle;
  normal: TextStyle;
  medium: TextStyle;
  semibold: TextStyle;
  bold: TextStyle;
};

/**
 * Define una hoja de estilos por tamaño de texto
 * */
export type HeadingStyleSheetSizes = {
  '2xl': TextStyle;
  'xl': TextStyle;
  'lg': TextStyle;
  'md': TextStyle;
  'sm': TextStyle;
  'xs': TextStyle;
};

/**
 * Define las propiedades personalizadas del componente
 * */
export type ComponentHeadingCustomProps = {
  size?: keyof HeadingStyleSheetSizes;
  weight?: keyof HeadingStyleSheetWeights;
  align?: keyof HeadingStyleSheetAligns;
};

/**
 * Define todas las propiedades personalizadas del componente
 * */
export type ComponentHeadingProps = PropsWithChildren<
  NativeTextProps & ComponentHeadingCustomProps
>;

/**
 * Define las propiedades que recibe el hook
 * */
export type UseComponentHeadingProps = Omit<ComponentHeadingProps, 'children'>;

/**
 * Define el ForwardComponent
 * */
export type ForwardComponentHeadingType = ForwardRefRenderFunction<
  NativeText,
  ComponentHeadingProps
>;
