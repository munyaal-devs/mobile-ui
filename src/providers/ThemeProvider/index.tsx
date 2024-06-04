import {
  type ThemeProviderContext,
  type ThemeProviderProps,
  type ThemeProviderState,
  type ThemeProviderStateKey,
} from './types';
import React, {
  createContext,
  type FC,
  type PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
} from 'react';

import { aliases, tokens } from '../../builder';

const initialState: Partial<ThemeProviderContext> = {};

export const Context = createContext<ThemeProviderContext>(
  initialState as ThemeProviderContext
);

const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = (props) => {
  const { theme, colors: themeColors, children } = props;

  /**
   * Estado que contiene todas las configuraciones
   * */
  const state: ThemeProviderState = useMemo(() => {
    const colors = themeColors[theme];

    return {
      aliases,
      theme,
      colors,
      ...tokens,
    };
  }, [theme, themeColors]);

  /**
   * Busca el valor de una clave del tema
   * @param {ThemeProviderStateKey} token
   * @param {string | number} value
   * */
  const fetchTokenValue = useCallback(
    (token: ThemeProviderStateKey, value: string | number) => {
      if (typeof value === 'string' && value.startsWith('$')) {
        value = value.replace('$', '');

        if (state.hasOwnProperty(token)) {
          const tokenFound = state[token];

          if (tokenFound.hasOwnProperty(value)) {
            return tokenFound[value];
          }
        }
      }

      return value;
    },
    [state]
  );

  const value: ThemeProviderContext = useMemo(
    () => ({
      ...state,
      fetchTokenValue,
    }),
    [state, fetchTokenValue]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useThemeProvider = () => useContext(Context);

export default ThemeProvider;
