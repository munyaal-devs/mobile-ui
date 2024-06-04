import { type ThemeProviderProps, type UIState } from './types';
import React, {
  createContext,
  type FC,
  type PropsWithChildren,
  useContext,
  useMemo,
} from 'react';

import { aliases, tokens } from '../../builder';

const initialState: Partial<UIState> = {};

export const Context = createContext<UIState>(initialState as UIState);

const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = (props) => {
  const { theme, colors: themeColors, children } = props;

  const value: UIState = useMemo(() => {
    const colors = themeColors[theme];

    return {
      aliases,
      theme,
      colors,
      ...tokens,
    };
  }, [theme, themeColors]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useThemeProvider = () => useContext(Context);

export default ThemeProvider;
