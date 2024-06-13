import { Heading, Image, View } from '@munyaal/mobile-ui';
import * as React from 'react';

const ImageExample = () => {
  return (
    <View flexDirection={'column'} gap={'$4'}>
      <Heading>Image Component</Heading>

      <View alignItems={'center'} justifyContent={'center'}>
        <Image
          w={100}
          h={100}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
    </View>
  );
};

export default ImageExample;
