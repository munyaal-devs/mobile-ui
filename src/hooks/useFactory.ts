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

  const properties = useClearProps(conf, props);

  const styles = useStyleBuilder(conf, props);

  return {
    properties,
    styles,
  };
};
