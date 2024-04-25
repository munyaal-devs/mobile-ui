import * as React from 'react';
import { useMemo } from 'react';

import {
  type ColorSchemeName,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {
  Text,
  type ThemeMode,
  UIConfig,
  UIProvider,
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
        {/*<Text size={'xs'} weight={'light'}>*/}
        {/*  Hola Mundo*/}
        {/*</Text>*/}
        {/*<Text size={'sm'} weight={'medium'}>*/}
        {/*  Hola Mundo*/}
        {/*</Text>*/}
        {/*<Text size={'md'} weight={'normal'}>*/}
        {/*  Hola Mundo*/}
        {/*</Text>*/}
        {/*<Text size={'lg'} weight={'semibold'}>*/}
        {/*  Hola Mundo*/}
        {/*</Text>*/}
        {/*<Text size={'xl'} weight={'bold'}>*/}
        {/*  Hola Mundo*/}
        {/*</Text>*/}

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          consequatur debitis doloribus error facere, ipsa molestiae odit
          quisquam, quos sed tempora totam. Cum dolorum error, et hic omnis rem
          sit.
        </Text>

        <VStack>
          <View style={styles.box}>
            <Text size={'xl'} style={styles.text}>
              1
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text} size={'xl'}>
              2
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text} size={'xl'}>
              3
            </Text>
          </View>
        </VStack>

        {/*<View style={styles.container}>*/}
        {/*<Heading>Hello World</Heading>*/}
        {/*<Heading>Theme: {theme}</Heading>*/}

        {/*<Text align={'left'}>*/}
        {/*  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci*/}
        {/*  blanditiis commodi culpa debitis, dolores harum impedit laborum*/}
        {/*  mollitia nam nemo neque non perspiciatis quae quam quod rem,*/}
        {/*  repellat tempora, temporibus.*/}
        {/*</Text>*/}

        {/*<Heading size={'2xl'}>Heading 2 Extra Large</Heading>*/}
        {/*<Heading size={'xl'}>Heading Extra Large</Heading>*/}
        {/*<Heading size={'lg'}>Heading Large</Heading>*/}
        {/*<Heading size={'md'}>Heading Medium</Heading>*/}
        {/*<Heading size={'sm'}>Heading Small</Heading>*/}
        {/*<Heading size={'xs'}>Heading Extra Small</Heading>*/}

        {/*<Text size={'lg'} weight={'bold'}>*/}
        {/*  Text Large Bold*/}
        {/*</Text>*/}
        {/*<Text size={'lg'} weight={'semibold'}>*/}
        {/*  Text Large Regular*/}
        {/*</Text>*/}
        {/*<Text size={'lg'} weight={'medium'}>*/}
        {/*  Text Large Bold*/}
        {/*</Text>*/}
        {/*<Text size={'lg'} weight={'normal'}>*/}
        {/*  Text Large Bold*/}
        {/*</Text>*/}
        {/*<Text size={'lg'} weight={'light'}>*/}
        {/*  Text Large Light*/}
        {/*</Text>*/}

        {/*<Text size={'md'} weight={'bold'}>*/}
        {/*  Text Large Bold*/}
        {/*</Text>*/}
        {/*<Text size={'md'} weight={'semibold'}>*/}
        {/*  Text Large Regular*/}
        {/*</Text>*/}
        {/*<Text size={'md'} weight={'medium'}>*/}
        {/*  Text Large Bold*/}
        {/*</Text>*/}
        {/*<Text size={'md'} weight={'normal'}>*/}
        {/*  Text Large Bold*/}
        {/*</Text>*/}
        {/*<Text size={'md'} weight={'light'}>*/}
        {/*  Text Large Light*/}
        {/*</Text>*/}

        {/*<Text size={'sm'} weight={'bold'}>*/}
        {/*  Text Large Bold*/}
        {/*</Text>*/}
        {/*<Text size={'sm'} weight={'semibold'}>*/}
        {/*  Text Large Regular*/}
        {/*</Text>*/}
        {/*<Text size={'sm'} weight={'medium'}>*/}
        {/*  Text Large Bold*/}
        {/*</Text>*/}
        {/*<Text size={'sm'} weight={'normal'}>*/}
        {/*  Text Large Bold*/}
        {/*</Text>*/}
        {/*<Text size={'sm'} weight={'light'}>*/}
        {/*  Text Large Light*/}
        {/*</Text>*/}

        {/*<Text size={'xs'} weight={'bold'}>*/}
        {/*  Text Large Bold*/}
        {/*</Text>*/}
        {/*<Text size={'xs'} weight={'semibold'}>*/}
        {/*  Text Large Regular*/}
        {/*</Text>*/}
        {/*<Text size={'xs'} weight={'medium'}>*/}
        {/*  Text Large Bold*/}
        {/*</Text>*/}
        {/*<Text size={'xs'} weight={'normal'}>*/}
        {/*  Text Large Bold*/}
        {/*</Text>*/}
        {/*<Text size={'xs'} weight={'light'}>*/}
        {/*  Text Large Light*/}
        {/*</Text>*/}
        {/*<Button size={'sm'}>*/}
        {/*  <Text size={'sm'}>Click Me</Text>*/}
        {/*</Button>*/}
        {/*<Button size={'md'}>*/}
        {/*  <Text size={'md'}>Click Me</Text>*/}
        {/*</Button>*/}
        {/*<Button size={'lg'}>*/}
        {/*  <Text size={'lg'}>Click Me</Text>*/}
        {/*</Button>*/}
        {/*</View>*/}
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
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#FF9632',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
