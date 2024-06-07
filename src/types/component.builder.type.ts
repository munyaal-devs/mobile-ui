import type { AliasStyle } from './aliases.type';
import type {
  ImageProps,
  ImageStyle,
  TextProps,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';

/**
 * Estilos aceptados
 * */
export type ComponentStyle = ViewStyle | TextStyle | ImageStyle;

/**
 * Propiedades aceptadas
 * */
export type ComponentProps = ImageProps | TextProps | ViewProps;

/**
 * Descompone el tipo de dato de las variantes y las transforma en propiedades
 * @template V - Tipo de dato de las variantes
 */
export type ComponentVariantProps<V extends Object> = {
  [K in keyof V]?: keyof V[K] extends IsBoolean ? boolean : keyof V[K];
} & Partial<AliasStyle>;

/**
 * Define las propiedades de estilos de un componente de react native
 * @template {ComponentStyle} T
 */
export type Styles<T extends ComponentStyle> = T extends infer E
  ? {
      /**
       * Define un objeto cuyas propiedades coinciden con las propiedades del tipo inferido.
       */
      [K in keyof E]?: E[K] | string;
    }
  : never;

type IsBoolean = 'true' | 'false';

/**
 * Define el tipo de estilo de un componente con variaciones.
 * @template S - Tipo de dato de las propiedades de estilo
 * @template P - Tipo de dato de las propiedades del componente
 * @template V - Tipo de dato de las variantes
 */
export type ComponentConfiguration<
  S extends ComponentStyle,
  P extends ComponentProps,
  V extends Object = {},
> = Styles<S> & {
  variants?: V;
  defaultProps?: ComponentVariantProps<V> & Partial<P>;
};
