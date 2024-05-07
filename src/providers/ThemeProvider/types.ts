import type { Aliases, Colors, ThemeMode, Tokens } from '../../utils/types';

export type UIState = Tokens & {
  theme: ThemeMode;
  aliases: Aliases;
  colors: Colors;
};

export type UIStateKey = keyof UIState;
