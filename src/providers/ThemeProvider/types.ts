import type {
  Colors,
  ComponentConfiguration,
  ComponentConfigurations,
  ComponentConfigurationsKey,
  ThemeMode,
  Tokens,
} from '../../types';

export type ThemeState = Tokens & {
  theme: ThemeMode;
  colors: Colors;
  components: ComponentConfigurations;
};

export type ThemeTools = {
  fetchTokenValue: (
    token: keyof ThemeState,
    value: string | number
  ) => string | number;
  fetchComponentConfiguration: (
    componentName: ComponentConfigurationsKey
  ) => ComponentConfiguration<any, any, any>;
};

export type ThemeStateKey = keyof ThemeState;

export type ThemeColors = {
  [key in ThemeMode]: Colors;
};

export type ThemeConfig = Omit<ThemeState, 'colors' | 'theme'> & {
  colors: ThemeColors;
};

export type ThemeProviderProps = {
  theme: ThemeMode;
  config: ThemeConfig;
};
