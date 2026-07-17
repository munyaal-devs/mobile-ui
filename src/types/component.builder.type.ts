import type { AliasStyle } from './aliases.type';
import type {
  ImageProps,
  ImageStyle,
  PressableProps,
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
 *
 * Unión de los props nativos de los componentes base que envuelve el factory.
 * Se incluyen `ViewProps`, `TextProps`, `ImageProps` y `PressableProps` (este
 * último no extiende a `ViewProps` por el callback de `children`, por lo que
 * debe aparecer explícitamente). Los componentes compuestos extienden alguno
 * de estos props, por lo que siguen siendo asignables a la unión sin recurrir
 * a `any`.
 * */
export type ComponentProps =
  | ImageProps
  | TextProps
  | ViewProps
  | PressableProps;

/**
 * Descompone el tipo de dato de las variantes y las transforma en propiedades
 */
export type VariantProps<V extends Record<PropertyKey, unknown> = {}> = {
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
  Variants extends Record<PropertyKey, unknown> = {},
  StateArgs extends string = never,
> = StylePipe<StyleArgs> &
  StatePipe<StateArgs, StyleArgs> & {
    variants?: Variants & StatePipe<StateArgs, StyleArgs>;
    defaultProps?: VariantProps<Variants> & Partial<Props>;
  };
