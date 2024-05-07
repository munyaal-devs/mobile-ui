import * as React from 'react';
import { Divider, Heading, ScrollView, Text, View } from '@munyaal/mobile-ui';
import HStackExample from './components/HStackExample';
import VStackExample from './components/VStackExample';
import CenterExample from './components/CenterExample';
import IconExample from './components/IconExample';
import ButtonExample from './components/ButtonExample';
import MainView from './components/MainView';
import MainProvider from './components/MainProvider';

export default function App() {
  return (
    <MainProvider>
      <MainView>
        <View flex={1} px={'$6'} pt={'$2'}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View flexDirection={'column'} gap={'$4'} mb={'$8'}>
              <Heading>I am a Heading</Heading>
              <Divider />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                consequatur debitis doloribus error facere, ipsa molestiae odit
                quisquam, quos sed tempora totam. Cum dolorum error, et hic
                omnis rem sit.
              </Text>
              <Divider />
              <HStackExample />
              <Divider />
              <VStackExample />
              <Divider />
              <CenterExample />
              <Divider />
              <IconExample />
              <Divider />
              <ButtonExample />
            </View>
          </ScrollView>
        </View>
      </MainView>
    </MainProvider>
  );
}
