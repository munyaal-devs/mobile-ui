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
 */
export type VariantProps<V extends Object = {}> = {
  [K in keyof V]?: keyof V[K] extends IsBoolean ? boolean : keyof V[K];
} & Partial<AliasStyle>;

/**
 * Define las propiedades de estilos de un componente de react native
 */
export type StylePipe<T extends ComponentStyle> = T extends infer E
  ? {
      /**
       * Define un objeto cuyas propiedades coinciden con las propiedades del tipo inferido.
       */
      [K in keyof E]?: E[K] | string;
    }
  : never;

type IsBoolean = 'true' | 'false';

/**
 * Define las propiedades de estilos de un componente de react native
 */
export type StatePipe<
  StateArgs extends string,
  StyleArgs extends ComponentStyle,
> = {
  /**
   * Define un objeto cuyas propiedades coinciden con las propiedades del tipo inferido.
   */
  [Key in StateArgs as `:${Key}`]?: StylePipe<StyleArgs>;
};

/**
 * Define el tipo de estilo de un componente con variaciones.
 */
export type ComponentConfiguration<
  StyleArgs extends ComponentStyle = {},
  Props extends ComponentProps = {},
  Variants extends Object = {},
  StateArgs extends string = never,
> = StylePipe<StyleArgs> &
  StatePipe<StateArgs, StyleArgs> & {
    variants?: Variants & StatePipe<StateArgs, StyleArgs>;
    defaultProps?: VariantProps<Variants> & Partial<Props>;
  };
