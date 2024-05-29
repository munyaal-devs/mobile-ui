import { useThemeProvider } from '../providers/ThemeProvider';
import { useCallback } from 'react';
import type { UIState } from '../providers/ThemeProvider/types';

export const useToken = () => {
  const uiKit = useThemeProvider();

  /**
   * Busca el valor de una clave del tema
   * */
  const fetch = useCallback(
    (token: string | keyof UIState, value: string | number) => {
      if (typeof value === 'string' && value.startsWith('$')) {
        value = value.replace('$', '');

        if (uiKit.hasOwnProperty(token)) {
          const tokens = uiKit[token];

          if (tokens.hasOwnProperty(value)) {
            return tokens[value];
          }
        }
      }

      return value;
    },
    [uiKit]
  );

  return {
    fetch,
  };
};
