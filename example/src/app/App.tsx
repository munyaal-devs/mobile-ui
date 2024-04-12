import * as React from 'react';

import {
  type ColorSchemeName,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { Button, Heading, Text } from '@munyaal/mobile-ui';

export default function App() {
  const theme: ColorSchemeName = useColorScheme();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Heading>Hello World</Heading>
        <Heading>Theme: {theme}</Heading>

        <Text align={'left'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          blanditiis commodi culpa debitis, dolores harum impedit laborum
          mollitia nam nemo neque non perspiciatis quae quam quod rem, repellat
          tempora, temporibus.
        </Text>

        <Heading size={'2xl'}>Heading 2 Extra Large</Heading>
        <Heading size={'xl'}>Heading Extra Large</Heading>
        <Heading size={'lg'}>Heading Large</Heading>
        <Heading size={'md'}>Heading Medium</Heading>
        <Heading size={'sm'}>Heading Small</Heading>
        <Heading size={'xs'}>Heading Extra Small</Heading>

        <Text size={'lg'} weight={'bold'}>
          Text Large Bold
        </Text>
        <Text size={'lg'} weight={'semibold'}>
          Text Large Regular
        </Text>
        <Text size={'lg'} weight={'medium'}>
          Text Large Bold
        </Text>
        <Text size={'lg'} weight={'normal'}>
          Text Large Bold
        </Text>
        <Text size={'lg'} weight={'light'}>
          Text Large Light
        </Text>

        <Text size={'md'} weight={'bold'}>
          Text Large Bold
        </Text>
        <Text size={'md'} weight={'semibold'}>
          Text Large Regular
        </Text>
        <Text size={'md'} weight={'medium'}>
          Text Large Bold
        </Text>
        <Text size={'md'} weight={'normal'}>
          Text Large Bold
        </Text>
        <Text size={'md'} weight={'light'}>
          Text Large Light
        </Text>

        <Text size={'sm'} weight={'bold'}>
          Text Large Bold
        </Text>
        <Text size={'sm'} weight={'semibold'}>
          Text Large Regular
        </Text>
        <Text size={'sm'} weight={'medium'}>
          Text Large Bold
        </Text>
        <Text size={'sm'} weight={'normal'}>
          Text Large Bold
        </Text>
        <Text size={'sm'} weight={'light'}>
          Text Large Light
        </Text>

        <Text size={'xs'} weight={'bold'}>
          Text Large Bold
        </Text>
        <Text size={'xs'} weight={'semibold'}>
          Text Large Regular
        </Text>
        <Text size={'xs'} weight={'medium'}>
          Text Large Bold
        </Text>
        <Text size={'xs'} weight={'normal'}>
          Text Large Bold
        </Text>
        <Text size={'xs'} weight={'light'}>
          Text Large Light
        </Text>
        <Button size={'sm'}>
          <Text size={'sm'}>Click Me</Text>
        </Button>
        <Button size={'md'}>
          <Text size={'md'}>Click Me</Text>
        </Button>
        <Button size={'lg'}>
          <Text size={'lg'}>Click Me</Text>
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    paddingBottom: 40,
    paddingHorizontal: 32,
    flexDirection: 'column',
    gap: 16,
  },
});
