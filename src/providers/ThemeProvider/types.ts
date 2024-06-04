import type { Aliases, Colors, ThemeMode, Tokens } from '../../types';

export type UIState = Tokens & {
  theme: ThemeMode;
  aliases: Aliases;
  colors: Colors;
};

export type UIStateKey = keyof UIState;

export type ThemeColors = {
  [key in ThemeMode]: Colors;
};

export type ThemeProviderProps = {
  theme: ThemeMode;
  colors: ThemeColors;
  components: any;
};
