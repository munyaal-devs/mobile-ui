import { type UIState } from './types';
import React, {
  createContext,
  type FC,
  type PropsWithChildren,
  useContext,
  useMemo,
} from 'react';
import type { Config, ThemeMode } from '../../utils';

const initialState: Partial<UIState> = {};

export const Context = createContext<UIState>(initialState as UIState);

type ThemeProviderProps = {
  config: Config;
  theme?: ThemeMode;
};

const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = (props) => {
  const { theme = 'light', config, children } = props;

  const value: UIState = useMemo(() => {
    const { aliases, tokens, themes } = config;

    const colors = themes[theme].colors;

    return {
      aliases,
      theme,
      colors,
      ...tokens,
    };
  }, [theme, config]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useThemeProvider = () => useContext(Context);

export default ThemeProvider;
