import React, { type FC } from 'react';
import { Button, Heading, Icon, Text, View } from '@munyaal/mobile-ui';
import { mdiContentSave } from '@mdi/js';

const ButtonExample: FC = () => {
  return (
    <View flexDirection={'column'} gap={'$4'}>
      <Heading>Button Component</Heading>

      <View gap={'$4'}>
        <Button size={'sm'}>
          <Icon size={'$4'} color={'$text50'} path={mdiContentSave} />
          <Text size={'md'} color={'$text50'} weight={'light'}>
            Hola mundo
          </Text>
          <Icon size={'$4'} color={'$text50'} path={mdiContentSave} />
        </Button>

        <Button action={'secondary'}>
          <Icon color={'$primary500'} size={'$4.5'} path={mdiContentSave} />
          <Text size={'lg'} color={'$primary500'} weight={'light'}>
            Hola mundo
          </Text>
          <Icon color={'$primary500'} size={'$4.5'} path={mdiContentSave} />
        </Button>

        <Button size={'lg'}>
          <Icon size={'$5'} color={'$text50'} path={mdiContentSave} />
          <Text size={'xl'} color={'$text50'} weight={'light'}>
            Hola mundo
          </Text>
          <Icon size={'$5'} color={'$text50'} path={mdiContentSave} />
        </Button>
      </View>
    </View>
  );
};

export default ButtonExample;
