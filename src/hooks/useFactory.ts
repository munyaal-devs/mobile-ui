import { useThemeToolsProvider } from '../providers/ThemeProvider';
import { useMemo } from 'react';
import { useClearProps } from './useClearProps';
import { useStyleBuilder } from './useStyleBuilder';
import type { ComponentConfigurationsKey, ComponentProps } from '../types';

export const useFactory = <Props extends ComponentProps>(
  props: Props,
  name: ComponentConfigurationsKey
) => {
  const { fetchComponentConfiguration } = useThemeToolsProvider();

  const conf = useMemo(
    () => fetchComponentConfiguration(name),
    [fetchComponentConfiguration, name]
  );

  // Elimina las propiedades de estilos para dejar los del componente
  const properties = useClearProps(conf, props);

  // Crea los estilos del componente
  const styles = useStyleBuilder(conf, props);

  return {
    properties,
    styles,
  };
};
