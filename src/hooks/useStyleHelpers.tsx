import { useCallback } from 'react';
import { aliasStyleMap, propertyStyleMap, specificStyleMap } from './../config';
import { useThemeToolsProvider } from '../providers/ThemeProvider';
import { useComponentContextProvider } from '../providers/ComponentContextProvider';
import type { ComponentStyle } from '../types';

export const useStyleHelpers = () => {
  const { states } = useComponentContextProvider();
  const { fetchTokenValue } = useThemeToolsProvider();

  /**
   * Extrae solo los estilos aplicables
   * @param {Object} styles - Configuraciones de estilos
   * @return {Map<string, any>}
   * */
  const extractStyles = useCallback(
    (styles: Object) => {
      const styleMap = new Map<string, any>();

      for (const key in styles) {
        const value = styles[key];

        if (!key.startsWith(':')) {
          styleMap.set(key, value);
        } else {
          const stateKey = `${key}`.replace(':', '');

          if (states?.[stateKey]) {
            for (const styleKey in value) {
              styleMap.set(styleKey, value[styleKey]);
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
   * @param {Object} props - Propiedades del componente
   * @param {Object} defaultProps - Propiedades predeterminadas
   * @return {Map<string, any>}
   * */
  const mergeProperties = useCallback((props: Object, defaultProps: Object) => {
    const propsMap = new Map<string, any>();

    for (const key in defaultProps) {
      const value = defaultProps[key];

      propsMap.set(key, value);
    }

    for (const key in props) {
      const value: any = props[key];

      propsMap.set(key, value);
    }

    return propsMap;
  }, []);

  /**
   * Extrae solo los estilos aplicables de las variantes configuradas en las propiedades del componente
   * @param {Map<string, any>} properties - Propiedades del componente
   * @param {Object} variants - Propiedades predeterminadas
   * @return {Map<string, any>}
   * */
  const extractVariantStyles = useCallback(
    (properties: Map<string, any>, variants: Object) => {
      const styleMap = new Map<string, any>();

      properties.forEach((propertyValue, propertyKey) => {
        if (propertyKey in variants) {
          const variant = variants[propertyKey];

          if (typeof propertyValue === 'string' && propertyValue in variant) {
            const variantStyle = extractStyles(variant[propertyValue]);

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
   * @param {Map<string, any>} properties - Propiedades del componente
   * @return {Map<string, any>}
   * */
  const extractCustomStyles = useCallback((properties: Map<string, any>) => {
    const styleMap = new Map<string, any>();

    properties.forEach((propertyValue, propertyKey) => {
      if (specificStyleMap.has(propertyKey)) {
        styleMap.set(propertyKey, propertyValue);
      }

      if (aliasStyleMap.has(propertyKey)) {
        const styleKey = aliasStyleMap.get(propertyKey);

        if (styleKey) styleMap.set(styleKey, propertyValue);
      }
    });

    const customProps = Object.assign({}, { ...properties.get('style') });

    for (const styleKey in customProps) {
      const styleValue = customProps[styleKey];

      styleMap.set(styleKey, styleValue);
    }

    return styleMap;
  }, []);

  /**
   * Fusiona un arreglo de mapa de estilos en un solo map
   * @param {Map<string, any>[]} styleList - Propiedades del componente
   * @return {Map<string, any>}
   * */
  const mergeStyles = useCallback((styleList: Map<string, any>[]) => {
    const styleMap = new Map<string, any>();

    for (const styles of styleList) {
      styles.forEach((styleValue, styleKey) => {
        styleMap.set(styleKey, styleValue);
      });
    }

    return styleMap;
  }, []);

  /**
   * Aplica los valores del tema en los estilos
   * @param {Map<string, any>} styleMap - Propiedades del estilo
   * @return {ComponentStyle}
   * */
  const applyTheme = useCallback(
    (styleMap: Map<string, any>) => {
      const custom: ComponentStyle = {};

      styleMap.forEach((value, key) => {
        const token = propertyStyleMap.get(key);

        if (token && typeof value === 'string') {
          value = fetchTokenValue(token, value);
        }

        Object.assign(custom, { [key]: value });
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
