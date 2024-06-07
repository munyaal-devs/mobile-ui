import type {
  ComponentConfigurationsKey,
  ComponentProps,
  ComponentStyle,
} from '../types';
import { useCallback, useMemo } from 'react';
import { useThemeToolsProvider } from '../providers/ThemeProvider';
import { aliasStyleMap, propertyStyleMap, specificStyleMap } from '../config';
import { StyleSheet } from 'react-native';

export function useComponentBuilder<P extends ComponentProps>(
  componentName: ComponentConfigurationsKey,
  props: Omit<P, 'children'>
) {
  const { fetchTokenValue, fetchComponentConfiguration } =
    useThemeToolsProvider();

  const { defaultProps, variants, ...generalStyles } = useMemo(
    () => fetchComponentConfiguration(componentName),
    [fetchComponentConfiguration, componentName]
  );

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
      mixedProperties.forEach((value: string | number | any, key: string) => {
        if (variants?.hasOwnProperty(key)) {
          const variant = variants[key];

          if (variant.hasOwnProperty(value)) {
            const variantStyle = variant[value];

            for (const variantStyleKey in variantStyle) {
              const variantStyleValue = variantStyle[variantStyleKey];

              defaultStyles.set(variantStyleKey, variantStyleValue);
            }
          }
        }

        const aliasStyle = aliasStyleMap.get(key);

        if (aliasStyle) {
          defaultStyles.set(aliasStyle, value);
        }
      });

      return defaultStyles;
    },
    [variants]
  );

  /**
   * En caso de asignar estilos del tema, esta funciona los busca y los asigna a la hoja de estilos
   * */
  const applyTheme = useCallback(
    (styleMap: Map<string, string | number | any>) => {
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

  const mergeStyles = useCallback(
    (styles: Map<string, string | number | any>) => {
      const customProps: any = Object.assign({}, props.style);

      for (const key in customProps) {
        const value = customProps[key];

        styles.set(key, value);
      }

      for (const key in props) {
        if (specificStyleMap.has(key)) {
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
  const styles: ComponentStyle = useMemo(() => {
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
    const customProps: any = Object.assign({}, props);

    delete customProps.style;

    for (const key in defaultProps) {
      const value = defaultProps[key];

      if (!customProps?.hasOwnProperty(key)) {
        Object.assign(customProps, { [key]: value });
      }
    }

    for (const key in customProps) {
      if (
        variants?.hasOwnProperty(key) ||
        aliasStyleMap.has(key) ||
        specificStyleMap.has(key)
      ) {
        delete customProps[key];
      }
    }

    return customProps;
  }, [props, defaultProps, variants]);

  return {
    styles,
    properties,
  };
}
