import React, { type FC, type PropsWithChildren, useMemo } from 'react';
import { type ColorSchemeName, useColorScheme } from 'react-native';
import { type ThemeMode, ThemeProvider, UIConfig } from '@munyaal/mobile-ui';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const MainProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const colorScheme: ColorSchemeName = useColorScheme();

  const theme: ThemeMode = useMemo(
    () => (colorScheme ? colorScheme : 'light'),
    [colorScheme]
  );

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme} config={UIConfig}>
        {children}
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default MainProvider;
