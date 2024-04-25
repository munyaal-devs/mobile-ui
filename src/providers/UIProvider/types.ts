import type { Aliases, Colors, ThemeMode, Tokens } from '../../utils/types';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type UIState = Tokens & {
  theme: ThemeMode;
  aliases: Aliases;
  colors: Colors;
};

export type UIStateKey = keyof UIState;

export type Style = ImageStyle & TextStyle & ViewStyle;

export type StyleKey = keyof Style;
