import {
  type ThemeProviderProps,
  type ThemeState,
  type ThemeStateKey,
  type ThemeTools,
} from './types';
import React, {
  createContext,
  type FC,
  type PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import type {
  ComponentConfiguration,
  ComponentConfigurationsKey,
} from '../../types';
import { ToastProvider } from '../ToastProvider';

const initialStateContextTheme: Partial<ThemeState> = {};

const ContextTheme = createContext<ThemeState>(
  initialStateContextTheme as ThemeState
);

const initialStateContextThemeTools: Partial<ThemeTools> = {};

const ContextThemeTools = createContext<ThemeTools>(
  initialStateContextThemeTools as ThemeTools
);

const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = (props) => {
  const {
    children,
    theme,
    config: { colors: themeColors, ...otherProperties },
  } = props;

  /**
   * Estado que contiene todas las configuraciones
   * */
  const state: ThemeState = useMemo(() => {
    const colors = themeColors[theme];

    return {
      theme,
      colors,
      ...otherProperties,
    };
  }, [otherProperties, theme, themeColors]);

  /**
   * Busca el valor de una clave del tema
   * @param {ThemeStateKey} token
   * @param {string | number} value
   * */
  const fetchTokenValue = useCallback(
    (token: ThemeStateKey, value: string | number) => {
      if (typeof value === 'string' && value.startsWith('$')) {
        const tokenKey = value.slice(1);

        if (state.hasOwnProperty(token)) {
          const tokenFound = state[token] as
            | Record<string, unknown>
            | undefined;

          if (
            tokenFound &&
            typeof tokenFound === 'object' &&
            tokenFound.hasOwnProperty(tokenKey)
          ) {
            return tokenFound[tokenKey] as string | number;
          }
        }
      }

      return value;
    },
    [state]
  );

  /**
   * Busca la configuración de estilos del componente.
   *
   * Si no existe configuración registrada para `componentName` se devuelve un
   * fallback seguro y bien tipado (`{}`). En desarrollo además se emite un
   * `console.warn` para alertar de la omisión, evitando fallos silenciosos
   * sin romper la API pública.
   * @param {ComponentConfigurationsKey} componentName
   * */
  const fetchComponentConfiguration = useCallback(
    (componentName: ComponentConfigurationsKey): ComponentConfiguration => {
      const configuration = state.components?.[componentName];

      if (configuration) {
        return { ...configuration } as unknown as ComponentConfiguration;
      }

      if (__DEV__) {
        console.warn(
          `[mobile-ui] No se encontró configuración para el componente ` +
            `"${componentName}". Se usará una configuración vacía como fallback.`
        );
      }

      return {};
    },
    [state]
  );

  const tools: ThemeTools = useMemo(
    () => ({
      fetchTokenValue,
      fetchComponentConfiguration,
    }),
    [fetchTokenValue, fetchComponentConfiguration]
  );

  return (
    <ContextTheme.Provider value={state}>
      <ContextThemeTools.Provider value={tools}>
        <ToastProvider>{children}</ToastProvider>
      </ContextThemeTools.Provider>
    </ContextTheme.Provider>
  );
};

export const useThemeProvider = () => useContext(ContextTheme);

export const useThemeToolsProvider = () => useContext(ContextThemeTools);

export default ThemeProvider;
