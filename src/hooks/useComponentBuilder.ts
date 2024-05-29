import type {
  BasicProps,
  ComponentConfiguration,
  ComponentProps,
} from './../utils/types';
import { type PropsWithChildren, useCallback, useMemo } from 'react';
import { useThemeProvider } from '../providers/ThemeProvider';
import {
  propertyTokensMap,
  specificStyleTokensMap,
} from '../utils/property.token.map';
import { useToken } from './useToken';
import { StyleSheet } from 'react-native';

export function useComponentBuilder<
  P extends BasicProps,
  V extends Record<string, any>,
>(
  props: Omit<PropsWithChildren<ComponentProps<V> & P>, 'children'>,
  configuration: ComponentConfiguration<P, V>
) {
  const {
    defaultProps,
    variants: configuredVariants,
    ...generalStyles
  } = configuration;

  const { aliases: configuredAliases } = useThemeProvider();

  const { fetch: fetchToken } = useToken();

  /**
   * Realiza mezcla de las propiedades por defecto y las propiedades asignadas por el desarrollador,
   * se le asigna un peso más grande a las propiedades escritas por el desarrollador
   * */
  const mixProperties = useCallback(() => {
    const propsMap = new Map<string, string | number | any>();

    for (const key in defaultProps) {
      const value = defaultProps[key];

      propsMap.set(key, value);
    }

    for (const key in props) {
      const value: any = props[key];

      propsMap.set(key, value);
    }

    return propsMap;
  }, [defaultProps, props]);

  /**
   * Crear un mapa de los estilos generales
   * */
  const createDefaultStyles = useCallback(() => {
    const styleMap = new Map<string, string | number | any>();

    for (const key in generalStyles) {
      const value = generalStyles[key];

      styleMap.set(key, value);
    }

    return styleMap;
  }, [generalStyles]);

  /**
   * Crea un mapa de estilos de acuerdo las variantes de estilos asignadas por defectos o por el programador
   * */
  const createStyles = useCallback(
    (
      defaultStyles: Map<string, string | number | any>,
      mixedProperties: Map<string, string | number | any>
    ) => {
      const aliases = Object.assign({}, configuredAliases);

      const variants = Object.assign({}, configuredVariants);

      mixedProperties.forEach((value: string | number | any, key: string) => {
        if (variants.hasOwnProperty(key)) {
          const variant = variants[key];

          if (variant.hasOwnProperty(value)) {
            const variantStyle = variant[value];

            for (const variantStyleKey in variantStyle) {
              const variantStyleValue = variantStyle[variantStyleKey];

              defaultStyles.set(variantStyleKey, variantStyleValue);
            }
          }
        }

        if (aliases.hasOwnProperty(key)) {
          const aliasStyle = aliases[key];

          defaultStyles.set(aliasStyle, value);
        }
      });

      return defaultStyles;
    },
    [configuredAliases, configuredVariants]
  );

  /**
   * En caso de asignar estilos del tema, esta funciona los busca y los asigna a la hoja de estilos
   * */
  const applyTheme = useCallback(
    (styleMap: Map<string, string | number | any>) => {
      const custom: BasicProps['style'] = {};

      styleMap.forEach((value, key) => {
        const token = propertyTokensMap.get(key);

        if (token && typeof value === 'string') {
          value = fetchToken(token, value);
        }

        Object.assign(custom, { [key]: value });
      });

      return custom;
    },
    [fetchToken]
  );

  const mergeStyles = useCallback(
    (styles: Map<string, string | number | any>) => {
      const customProps: any = Object.assign({}, props.style);

      for (const key in customProps) {
        const value = customProps[key];

        styles.set(key, value);
      }

      for (const key in props) {
        if (specificStyleTokensMap.has(key)) {
          const value = props[key];

          styles.set(key, value);
        }
      }

      return styles;
    },
    [props]
  );

  /**
   * Asignas las propiedades de estilos espécificas configuradas como variantes
   * */
  const styles: BasicProps['style'] = useMemo(() => {
    const defaultStyles = createDefaultStyles();

    const mixedProperties = mixProperties();

    const styleMap = createStyles(defaultStyles, mixedProperties);

    const mergedStyles = mergeStyles(styleMap);

    const payload = applyTheme(mergedStyles);

    const style = StyleSheet.create({
      container: payload,
    });

    return style.container;
  }, [
    mixProperties,
    createStyles,
    createDefaultStyles,
    applyTheme,
    mergeStyles,
  ]);

  /**
   * Propiedades limpias del componente
   * */
  const properties = useMemo(() => {
    const customProps = Object.assign({}, props);

    delete customProps.style;

    for (const key in defaultProps) {
      const value = defaultProps[key];

      if (!customProps?.hasOwnProperty(key)) {
        Object.assign(customProps, { [key]: value });
      }
    }
    for (const key in customProps) {
      if (
        configuredVariants?.hasOwnProperty(key) ||
        configuredAliases?.hasOwnProperty(key) ||
        specificStyleTokensMap.has(key)
      ) {
        delete customProps[key];
      }
    }
    return customProps;
  }, [props, defaultProps, configuredAliases, configuredVariants]);

  return {
    styles,
    properties,
  };
}
