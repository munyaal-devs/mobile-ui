import * as React from 'react';
import { useMemo } from 'react';

import {
  type ColorSchemeName,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {
  Text,
  type ThemeMode,
  UIConfig,
  UIProvider,
  View,
  VStack,
} from '@munyaal/mobile-ui';

export default function App() {
  const colorScheme: ColorSchemeName = useColorScheme();

  const theme: ThemeMode = useMemo(
    () => (colorScheme ? colorScheme : 'light'),
    [colorScheme]
  );

  return (
    <UIProvider theme={theme} config={UIConfig}>
      <ScrollView style={styles.container}>
        <Text mt={'$20'} size={'lg'} weight={'light'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          consequatur debitis doloribus error facere, ipsa molestiae odit
          quisquam, quos sed tempora totam. Cum dolorum error, et hic omnis rem
          sit.
        </Text>

        <VStack mt={'$8'}>
          <View w={'$18'} h={'$18'} bg={'$primary500'}>
            <Text size={'xl'} style={styles.text}>
              1
            </Text>
          </View>
          <View w={'$18'} h={'$18'} bg={'$primary500'}>
            <Text size={'xl'} style={styles.text}>
              2
            </Text>
          </View>
          <View w={'$18'} h={'$18'} bg={'$primary500'}>
            <Text size={'xl'} style={styles.text}>
              3
            </Text>
          </View>
        </VStack>
      </ScrollView>
    </UIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    paddingBottom: 40,
    paddingHorizontal: 32,
  },
  text: { color: '#fff' },
  box: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#FF9632',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
