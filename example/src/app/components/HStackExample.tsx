import React, { type FC } from 'react';
import { Heading, HStack, Text, View } from '@munyaal/mobile-ui';

const HStackExample: FC = () => {
  return (
    <View flexDirection={'column'} gap={'$4'}>
      <Heading>HStack Component</Heading>

      <HStack space={'xl'}>
        <View
          w={'$24'}
          h={'$24'}
          bg={'$primary500'}
          justifyContent={'center'}
          alignItems={'center'}
          rounded={'$md'}
          shadow={'xs'}
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
          shadow={'sm'}
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
          shadow={'md'}
        >
          <Text color={'$text50'} size={'xl'}>
            3
          </Text>
        </View>
      </HStack>
    </View>
  );
};

export default HStackExample;
