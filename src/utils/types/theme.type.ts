/**
 * Define todas las variaciones de un color
 * Desde la versión más clara hasta la más oscura
 * */
export type ColorShadePalette = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

/**
 * Define el key de una variación de color
 * */
export type ColorShadeKey = keyof ColorShadePalette;

/**
 * Define los colores que conforman al tema
 * */
export type ColorScheme = {
  primary: ColorShadePalette;
  secondary: ColorShadePalette;
  error: ColorShadePalette;
  success: ColorShadePalette;
  warning: ColorShadePalette;
};

/**
 * Define el key de un color
 * */
export type ColorSchemeKey = keyof ColorScheme;

/**
 * Define el nombre de un color
 * */
export type ColorName = `$${ColorSchemeKey}${ColorShadeKey}`;

/**
 * Define todos los colores del tema
 * */
export type Colors = {
  [colorName in ColorName]: string;
};

/*
 * Define la estructura del tema
 * */
export type Theme = {
  colors: Colors;
};
