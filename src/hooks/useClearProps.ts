import { useMemo } from 'react';
import type { ComponentConfiguration, ComponentProps } from './../types';
import { aliasStyleMap, specificStyleMap } from '../config';
import { specificPropStyleMap } from '../config/specific.prop.style.map';
import { useThemeToolsProvider } from '../providers/ThemeProvider';

export const useClearProps = <Props extends ComponentProps>(
  conf: ComponentConfiguration,
  props: Props
) => {
  const { fetchTokenValue } = useThemeToolsProvider();
  const { variants, defaultProps } = conf;

  /**
   * Fusiona las propiedades predeterminadas de la configuración
   * y las que paso el desarrollador en el uso del componente
   * */
  const allProps = useMemo<Record<string, unknown>>(() => {
    const customProps: Record<string, unknown> = Object.assign(
      {},
      props
    ) as unknown as Record<string, unknown>;
    const defaults = defaultProps as unknown as Record<string, unknown>;

    for (const key in defaults) {
      const value = defaults[key];

      if (!customProps?.hasOwnProperty(key)) {
        Object.assign(customProps, { [key]: value });
      }
    }

    return customProps;
  }, [defaultProps, props]);

  /**
   * Elimina las propiedades correspondientes a variantes, alias o específicos
   * */
  return useMemo<Record<string, unknown>>(() => {
    const customProps: Record<string, unknown> = Object.assign({}, allProps);
    const variantsRecord = variants as unknown as
      | Record<string, unknown>
      | undefined;

    delete customProps.style;

    /**
     * Resuelve un valor de prop contra el tema cuando corresponde a un
     * `specificPropStyleMap` (por ejemplo `placeholderTextColor`). Se aclara
     * el tipo con un `string | number` ya que los únicos mapeados son
     * colores que llegan como cadenas de formato `$<ColorKey>`.
     * */
    const resolveTokenProp = (userValue: unknown): unknown => {
      if (typeof userValue === 'string' || typeof userValue === 'number') {
        return fetchTokenValue('colors', userValue);
      }
      return userValue;
    };

    for (const key in customProps) {
      if (
        variantsRecord?.hasOwnProperty(key) ||
        aliasStyleMap.has(key) ||
        specificStyleMap.has(key)
      ) {
        delete customProps[key];
      }

      if (specificPropStyleMap.has(key)) {
        const userValue = customProps[key];
        const themeValue = resolveTokenProp(userValue);

        Object.assign(customProps, { [key]: themeValue });
      }
    }

    return customProps;
  }, [allProps, variants, fetchTokenValue]);
};
