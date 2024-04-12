import type { ForwardRefRenderFunction, PropsWithChildren } from 'react';
import { Pressable, type PressableProps, type TextStyle } from 'react-native';

/**
 * Define una hoja de estilos por tamaño de texto
 * */
export type ButtonStyleSheetSizes = {
  lg: TextStyle;
  md: TextStyle;
  sm: TextStyle;
};

/**
 * Define las propiedades personalizadas del componente
 * */
export type ComponentButtonCustomProps = {
  size?: keyof ButtonStyleSheetSizes;
};

/**
 * Define todas las propiedades personalizadas del componente
 * */
export type ComponentHeadingProps = PropsWithChildren<
  PressableProps & ComponentButtonCustomProps
>;

/**
 * Define las propiedades que recibe el hook
 * */
export type UseComponentHeadingProps = Omit<ComponentHeadingProps, 'children'>;

/**
 * Define el ForwardComponent
 * */
export type ForwardComponentHeadingType = ForwardRefRenderFunction<
  typeof Pressable,
  ComponentHeadingProps
>;
