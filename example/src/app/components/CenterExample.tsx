import React, { type FC } from 'react';
import { Center, Heading, Text, View } from '@munyaal/mobile-ui';

const CenterExample: FC = () => {
  return (
    <View flexDirection={'column'} gap={'$4'}>
      <Heading>Center Component</Heading>

      <Center bg={'$secondary500'} w={'$full'} h={'$40'} rounded={'$md'}>
        <Text color={'$text200'} size={'xl'}>
          This is the center.
        </Text>
      </Center>
    </View>
  );
};

export default CenterExample;
