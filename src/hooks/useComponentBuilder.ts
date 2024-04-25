import type {
  BasicProps,
  ComponentConfiguration,
  ComponentProps,
} from './../utils/types';
import { type PropsWithChildren, useCallback, useMemo } from 'react';
import { useUIProvider } from '../providers/UIProvider';
import { propertyTokensMap } from '../utils/property.token.map';

export function useComponentBuilder<
  P extends BasicProps,
  V extends Record<string, any>,
>(
  props: Omit<PropsWithChildren<ComponentProps<V> & P>, 'children'>,
  configuration: ComponentConfiguration<V>
) {
  const {
    defaultProps,
    variants: configuredVariants,
    ...generalStyles
  } = configuration;

  const ui = useUIProvider();

  /**
   * Realiza mezcla de las propiedades por defecto y las propiedades asignadas por el desarrollador,
   * se le asigna un peso más grande a las propiedades escritas por el desarrollador
   * */
  const mixProperties = useCallback(() => {
    const propsMap = new Map<string, string>();

    for (const key in defaultProps) {
      const value = `${defaultProps[key] as any}`;

      propsMap.set(key, `${value}`);
    }

    for (const key in props) {
      const value: any = props[key];

      propsMap.set(key, `${value}`);
    }

    return propsMap;
  }, [defaultProps, props]);

  /**
   * Crear un mapa de los estilos generales
   * */
  const createDefaultStyles = useCallback(() => {
    const styleMap = new Map<string, string>();

    for (const key in generalStyles) {
      const value = generalStyles[key];

      styleMap.set(key, `${value}`);
    }

    return styleMap;
  }, [generalStyles]);

  /**
   * Crea un mapa de estilos de acuerdo las variantes de estilos asignadas por defectos o por el programador
   * */
  const createStyles = useCallback(
    (
      defaultStyles: Map<string, string>,
      mixedProperties: Map<string, string>
    ) => {
      const variants = Object.assign({}, configuredVariants);
      mixedProperties.forEach((value: string, key: string) => {
        if (variants.hasOwnProperty(key)) {
          const variant = variants[key];

          if (variant.hasOwnProperty(value)) {
            const variantStyle = variant[value];

            for (const variantStyleKey in variantStyle) {
              const variantStyleValue = variantStyle[variantStyleKey];

              defaultStyles.set(variantStyleKey, `${variantStyleValue}`);
            }
          }
        }
      });

      return defaultStyles;
    },
    [configuredVariants]
  );

  /**
   * En caso de asignar estilos del tema, esta funciona los busca y los asigna a la hoja de estilos
   * */
  const applyTheme = useCallback(
    (styleMap: Map<string, string>) => {
      const custom: BasicProps['style'] = {};

      styleMap.forEach((value, key) => {
        if (value.startsWith('$')) {
          value = value.replace('$', '');

          const token = propertyTokensMap.get(key);

          if (token && ui.hasOwnProperty(token)) {
            const tokens = ui[token];

            if (tokens.hasOwnProperty(value)) {
              const tokenValue = tokens[value];

              Object.assign(custom, { [key]: tokenValue });
            }
          }
        } else {
          Object.assign(custom, { [key]: value });
        }
      });

      return custom;
    },
    [ui]
  );

  const mergeStyles = useCallback(
    (styles: Map<string, string>) => {
      const customProps: any = Object.assign({}, props.style);

      for (const key in customProps) {
        const value = customProps[key];

        styles.set(key, value);
      }

      return styles;
    },
    [props.style]
  );

  /**
   * Asignas las propiedades de estilos espécificas configuradas como variantes
   * */
  const styles: BasicProps['style'] = useMemo(() => {
    const defaultStyles = createDefaultStyles();

    const mixedProperties = mixProperties();

    const styleMap = createStyles(defaultStyles, mixedProperties);

    const mergedStyles = mergeStyles(styleMap);

    return applyTheme(mergedStyles);
  }, [
    mixProperties,
    createStyles,
    createDefaultStyles,
    applyTheme,
    mergeStyles,
  ]);

  const properties = useMemo(() => {
    const customProps = Object.assign({}, props);

    const { variants } = configuration;

    delete customProps.style;

    for (const key in customProps) {
      if (variants?.hasOwnProperty(key)) {
        delete customProps[key];
      }
    }

    return customProps;
  }, [props, configuration]);

  return {
    styles,
    properties,
  };
}
