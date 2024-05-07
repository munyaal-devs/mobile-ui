import type { Aliases, AliasStyle } from './aliases.type';
import type { Tokens } from './tokens.type';
import type { Themes } from './theme.type';
import type {
  ImageProps,
  ImageStyle,
  TextProps,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';

export type Config = {
  aliases: Aliases;
  tokens: Tokens;
  themes: Themes;
};

/**
 * Extiende un tipo de estilo con la opción de permitir cadenas en propiedades específicas.
 * @template T - Tipo de estilo base.
 */
export type ExtendWithStrings<T> = T extends infer E
  ? {
      /**
       * Define un objeto cuyas propiedades coinciden con las propiedades del tipo inferido.
       */
      [K in keyof E]: E[K] | string;
    }
  : never;

/**
 * Define los props básicos de définen un componente de react native
 * Puede ser ViewProps, ImageProps o TextProps.
 */
export type BasicProps = ImageProps | TextProps | ViewProps;

/**
 * Define los estilos básicos de un componente de react native
 * Puede ser ViewStyle, ImageStyle o TextStyle.
 */
export type BasicStyles = ImageStyle | TextStyle | ViewStyle;

/**
 * Define una unión de los tipos de estilo que quieres permitir.
 * Puede ser ViewStyle, TextStyle o ImageStyle.
 */
export type Styles = ExtendWithStrings<BasicProps['style']>;

export type IsBoolean = 'true' | 'false';

/**
 * Define los props que personalizan sus variantes del componente
 * @template V - Son las variantes
 */
export type ComponentProps<V> = {
  [K in keyof V]?: keyof V[K] extends IsBoolean ? boolean : keyof V[K];
} & Partial<AliasStyle>;

/**
 * Define el tipo de estilo de un componente con variaciones.
 * @template S - Tipo de estilo base (ViewStyle, TextStyle, o ImageStyle)
 */
export type ComponentConfiguration<P, V> = Styles & {
  variants?: V;
  defaultProps?: ComponentProps<V> & P;
};
