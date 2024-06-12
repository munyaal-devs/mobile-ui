import { useMemo } from 'react';
import type { ComponentConfiguration, ComponentProps } from './../types';
import { aliasStyleMap, specificStyleMap } from '../config';

export const useClearProps = <Props extends ComponentProps>(
  conf: ComponentConfiguration<any, any, any>,
  props: Props
) => {
  const { variants, defaultProps } = conf;

  /**
   * Fusiona las propiedades predeterminadas de la configuración
   * y las que paso el desarrollador en el uso del componente
   * */
  const allProps = useMemo(() => {
    const customProps = Object.assign({}, props);

    for (const key in defaultProps) {
      const value = defaultProps[key];

      if (!customProps?.hasOwnProperty(key)) {
        Object.assign(customProps, { [key]: value });
      }
    }

    return customProps;
  }, [defaultProps, props]);

  /**
   * Elimina las propiedades correspondientes a variantes, alias o específicos
   * */
  return useMemo(() => {
    const customProps: any = Object.assign({}, allProps);

    delete customProps.style;

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
  }, [allProps, variants]);
};
