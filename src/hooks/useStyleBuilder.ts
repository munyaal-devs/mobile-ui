import type {
  ComponentConfiguration,
  ComponentProps,
  ComponentStyle,
} from '../types';
import { useCallback, useMemo } from 'react';
import { propertyStyleMap } from '../config';
import { StyleSheet } from 'react-native';
import { useStyleHelpers } from './useStyleHelpers';
import { useThemeToolsProvider } from '../providers/ThemeProvider';

export function useStyleBuilder<Props extends ComponentProps>(
  configurations: ComponentConfiguration<any, any, any>,
  props: Props
) {
  const {
    extractStyles,
    mergeProperties,
    extractVariantStyles,
    extractCustomStyles,
    mergeStyles,
  } = useStyleHelpers();

  const { fetchTokenValue } = useThemeToolsProvider();

  const variants = useMemo(
    () => Object.assign({}, { ...configurations.variants }),
    [configurations.variants]
  );

  const defaultProps = useMemo(
    () => Object.assign({}, { ...configurations.defaultProps }),
    [configurations.defaultProps]
  );

  const globalStyles = useMemo(() => {
    const styles = Object.assign({}, { ...configurations });

    delete styles.variants;
    delete styles.defaultProps;

    return styles;
  }, [configurations]);

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

  /**
   * Asignas las propiedades de estilos espécificas configuradas como variantes
   * */
  return useMemo(() => {
    const properties = mergeProperties(props, defaultProps);

    const generalStyles = extractStyles(globalStyles);

    const variantStyles = extractVariantStyles(properties, variants);

    const customStyles = extractCustomStyles(properties);

    const mergedStyles = mergeStyles([
      generalStyles,
      variantStyles,
      customStyles,
    ]);

    const styles = applyTheme(mergedStyles);

    const { container } = StyleSheet.create({
      container: styles,
    });

    return container;
  }, [
    globalStyles,
    extractStyles,
    props,
    defaultProps,
    mergeProperties,
    variants,
    extractVariantStyles,
    extractCustomStyles,
    mergeStyles,
    applyTheme,
  ]);
}
