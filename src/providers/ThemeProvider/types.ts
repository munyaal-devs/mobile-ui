import type { Aliases, Colors, ThemeMode, Tokens } from '../../types';

export type ThemeProviderState = Tokens & {
  theme: ThemeMode;
  aliases: Aliases;
  colors: Colors;
};

export type ThemeProviderFunctions = {
  fetchTokenValue: (
    token: keyof ThemeProviderState,
    value: string | number
  ) => string | number;
};

export type ThemeProviderContext = ThemeProviderState & ThemeProviderFunctions;

export type ThemeProviderStateKey = keyof ThemeProviderState;

export type ThemeColors = {
  [key in ThemeMode]: Colors;
};

export type ThemeProviderProps = {
  theme: ThemeMode;
  colors: ThemeColors;
  components: any;
};
