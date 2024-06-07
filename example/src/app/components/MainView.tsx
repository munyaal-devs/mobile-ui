import React, { type FC, type PropsWithChildren, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, type StatusBarStyle, StyleSheet, View } from 'react-native';
import { useThemeProvider } from '@munyaal/mobile-ui';

const MainView: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const {
    colors: { background50 },
    theme,
  } = useThemeProvider();

  const barStyle: StatusBarStyle = useMemo(
    () => (theme === 'light' ? 'dark-content' : 'light-content'),
    [theme]
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: background50 }]}>
      <StatusBar backgroundColor={background50} barStyle={barStyle} />
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainView;
