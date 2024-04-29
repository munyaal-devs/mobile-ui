import * as React from 'react';
import { useMemo } from 'react';

import { type ColorSchemeName, StyleSheet, useColorScheme } from 'react-native';
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
      <VStack mt={'$8'} p={'$8'} flex={1}>
        <Text size={'lg'} weight={'light'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          consequatur debitis doloribus error facere, ipsa molestiae odit
          quisquam, quos sed tempora totam. Cum dolorum error, et hic omnis rem
          sit.
        </Text>
        <View
          w={'$18'}
          h={'$18'}
          bg={'$primary500'}
          rounded={'$md'}
          flex={1}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Text size={'xl'} style={styles.text}>
            1
          </Text>
        </View>
        <View
          w={'$18'}
          h={'$18'}
          bg={'$primary500'}
          rounded={'$md'}
          flex={2}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Text size={'xl'} style={styles.text}>
            2
          </Text>
        </View>
        <View
          w={'$18'}
          h={'$18'}
          bg={'$primary500'}
          rounded={'$md'}
          flex={3}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Text size={'xl'} style={styles.text}>
            3
          </Text>
        </View>
      </VStack>
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
