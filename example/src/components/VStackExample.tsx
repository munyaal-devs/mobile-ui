import React, { type FC } from 'react';
import { Heading, Text, View, VStack } from '@munyaal/mobile-ui';

const VStackExample: FC = () => {
  return (
    <View flexDirection={'column'} gap={'$4'}>
      <Heading>VStack Component</Heading>

      <VStack space={'xl'}>
        <View
          w={'$24'}
          h={'$24'}
          bg={'$secondary500'}
          justifyContent={'center'}
          alignItems={'center'}
          rounded={'$md'}
          shadow={'sm'}
        >
          <Text color={'$text50'} size={'xl'}>
            1
          </Text>
        </View>
        <View
          w={'$24'}
          h={'$24'}
          bg={'$primary500'}
          justifyContent={'center'}
          alignItems={'center'}
          rounded={'$md'}
        >
          <Text color={'$text50'} size={'xl'}>
            2
          </Text>
        </View>
        <View
          w={'$24'}
          h={'$24'}
          bg={'$secondary500'}
          justifyContent={'center'}
          alignItems={'center'}
          rounded={'$md'}
        >
          <Text color={'$text50'} size={'xl'}>
            3
          </Text>
        </View>
      </VStack>
    </View>
  );
};

export default VStackExample;
