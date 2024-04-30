import * as React from 'react';
import { useMemo } from 'react';

import { type ColorSchemeName, useColorScheme } from 'react-native';
import {
  Divider,
  Heading,
  ScrollView,
  Text,
  type ThemeMode,
  UIConfig,
  UIProvider,
  View,
} from '@munyaal/mobile-ui';
import HStackExample from './components/HStackExample';
import VStackExample from './components/VStackExample';
import CenterExample from './components/CenterExample';

export default function App() {
  const colorScheme: ColorSchemeName = useColorScheme();

  const theme: ThemeMode = useMemo(
    () => (colorScheme ? colorScheme : 'light'),
    [colorScheme]
  );

  return (
    <UIProvider theme={theme} config={UIConfig}>
      <ScrollView px={'$8'} my={'$8'}>
        <View flexDirection={'column'} gap={'$4'} mt={'$4'}>
          <Heading>I am a Heading</Heading>
          <Divider />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            consequatur debitis doloribus error facere, ipsa molestiae odit
            quisquam, quos sed tempora totam. Cum dolorum error, et hic omnis
            rem sit.
          </Text>
          <Divider />
          <HStackExample />
          <Divider />
          <VStackExample />
          <Divider />
          <CenterExample />
          <Divider />
        </View>
      </ScrollView>
    </UIProvider>
  );
}
