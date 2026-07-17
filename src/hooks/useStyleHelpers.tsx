import { useCallback } from 'react';
import { aliasStyleMap, propertyStyleMap, specificStyleMap } from './../config';
import { useThemeToolsProvider } from '../providers/ThemeProvider';
import { useComponentContextProvider } from '../providers/ComponentContextProvider';
import type { ComponentStyle } from '../types';

/**
 * Valor que puede almacenarse en un mapa de estilos. Cubre los escalares
 * usados por RN (cadenas, números) y los literales de objeto que llegan para
 * estados variantes; no incluye `any` para no relajar el análisis de tipos.
 * */
type StyleValue = string | number | boolean | undefined | null;

export const useStyleHelpers = () => {
  const { states } = useComponentContextProvider();
  const { fetchTokenValue } = useThemeToolsProvider();

  /**
   * Extrae solo los estilos aplicables
   * @param {Record<string, unknown>} styles - Configuraciones de estilos
   * @return {Map<string, StyleValue>}
   * */
  const extractStyles = useCallback(
    (styles: Record<string, unknown>) => {
      const styleMap = new Map<string, StyleValue>();

      for (const key in styles) {
        const value = styles[key];

        if (!key.startsWith(':')) {
          styleMap.set(key, value as StyleValue);
        } else {
          const stateKey = `${key}`.replace(':', '');

          if (states?.[stateKey]) {
            const stateValue = value as Record<string, StyleValue>;

            for (const styleKey in stateValue) {
              styleMap.set(styleKey, stateValue[styleKey]);
            }
          }
        }
      }
      return styleMap;
    },
    [states]
  );

  /**
   * Fusiona los props del componente y los props predeterminado en la configuración del componente
   * @param {Record<string, unknown>} props - Propiedades del componente
   * @param {Record<string, unknown>} defaultProps - Propiedades predeterminadas
   * @return {Map<string, unknown>}
   * */
  const mergeProperties = useCallback(
    (props: Record<string, unknown>, defaultProps: Record<string, unknown>) => {
      const propsMap = new Map<string, unknown>();

      for (const key in defaultProps) {
        const value = defaultProps[key];

        propsMap.set(key, value);
      }

      for (const key in props) {
        const value = props[key];

        propsMap.set(key, value);
      }

      return propsMap;
    },
    []
  );

  /**
   * Extrae solo los estilos aplicables de las variantes configuradas en las propiedades del componente
   * @param {Map<string, unknown>} properties - Propiedades del componente
   * @param {Record<string, unknown>} variants - Propiedades predeterminadas
   * @return {Map<string, StyleValue>}
   * */
  const extractVariantStyles = useCallback(
    (properties: Map<string, unknown>, variants: Record<string, unknown>) => {
      const styleMap = new Map<string, StyleValue>();

      properties.forEach((propertyValue, propertyKey) => {
        if (propertyKey in variants) {
          const variant = variants[propertyKey] as Record<string, unknown>;

          if (typeof propertyValue === 'string' && propertyValue in variant) {
            const variantStyle = extractStyles(
              variant[propertyValue] as Record<string, unknown>
            );

            variantStyle.forEach((styleValue, styleKey) => {
              styleMap.set(styleKey, styleValue);
            });
          }
        }
      });

      return styleMap;
    },
    [extractStyles]
  );

  /**
   * Extrae los estilos asignados por un alias o de forma directa
   * @param {Map<string, unknown>} properties - Propiedades del componente
   * @return {Map<string, StyleValue>}
   * */
  const extractCustomStyles = useCallback(
    (properties: Map<string, unknown>) => {
      const styleMap = new Map<string, StyleValue>();

      properties.forEach((propertyValue, propertyKey) => {
        if (specificStyleMap.has(propertyKey)) {
          styleMap.set(propertyKey, propertyValue as StyleValue);
        }

        if (aliasStyleMap.has(propertyKey)) {
          const styleKey = aliasStyleMap.get(propertyKey);

          if (styleKey) {
            styleMap.set(styleKey, propertyValue as StyleValue);
          }
        }
      });

      const inlineStyle = properties.get('style');
      const customProps: Record<string, unknown> = {};

      if (inlineStyle && typeof inlineStyle === 'object') {
        Object.assign(customProps, inlineStyle);
      }

      for (const styleKey in customProps) {
        const styleValue = customProps[styleKey];

        styleMap.set(styleKey, styleValue as StyleValue);
      }

      return styleMap;
    },
    []
  );

  /**
   * Fusiona un arreglo de mapa de estilos en un solo map
   * @param {Map<string, StyleValue>[]} styleList - Propiedades del componente
   * @return {Map<string, StyleValue>}
   * */
  const mergeStyles = useCallback((styleList: Map<string, StyleValue>[]) => {
    const styleMap = new Map<string, StyleValue>();

    for (const styles of styleList) {
      styles.forEach((styleValue, styleKey) => {
        styleMap.set(styleKey, styleValue);
      });
    }

    return styleMap;
  }, []);

  /**
   * Aplica los valores del tema en los estilos
   * @param {Map<string, StyleValue>} styleMap - Propiedades del estilo
   * @return {ComponentStyle}
   * */
  const applyTheme = useCallback(
    (styleMap: Map<string, StyleValue>) => {
      const custom: ComponentStyle = {};

      styleMap.forEach((value, key) => {
        const token = propertyStyleMap.get(key);
        const resolved =
          token && typeof value === 'string'
            ? fetchTokenValue(token, value)
            : value;

        Object.assign(custom, { [key]: resolved });
      });

      return custom;
    },
    [fetchTokenValue]
  );

  return {
    extractStyles,
    mergeProperties,
    extractVariantStyles,
    extractCustomStyles,
    mergeStyles,
    applyTheme,
  };
};
