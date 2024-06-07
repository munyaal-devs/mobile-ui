import React, { type FC, type PropsWithChildren, useMemo } from 'react';
import { type ColorSchemeName, useColorScheme } from 'react-native';
import { type ThemeMode, ThemeProvider } from '@munyaal/mobile-ui';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { themeConfig } from '../../theme';

const MainProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const colorScheme: ColorSchemeName = useColorScheme();

  const theme: ThemeMode = useMemo(
    () => (colorScheme ? colorScheme : 'light'),
    [colorScheme]
  );

  return (
    <SafeAreaProvider>
      <ThemeProvider config={themeConfig} theme={theme}>
        {children}
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default MainProvider;
