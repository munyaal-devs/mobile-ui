import type { ComponentConfiguration, ComponentProps } from '../types';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useStyleHelpers } from './useStyleHelpers';

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
    applyTheme,
  } = useStyleHelpers();

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

  return useMemo(() => {
    const properties = mergeProperties(Object.assign({}, props), defaultProps);

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
