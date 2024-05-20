import React, { type FC } from 'react';
import {
  Button,
  ButtonIcon,
  ButtonText,
  Heading,
  View,
} from '@munyaal/mobile-ui';
import { mdiContentSave } from '@mdi/js';

const ButtonExample: FC = () => {
  return (
    <View flexDirection={'column'} gap={'$4'}>
      <Heading>Button Component</Heading>

      <View>
        <Button size={'sm'} w={'auto'}>
          <ButtonIcon size={'sm'} path={mdiContentSave} />
          <ButtonText size={'sm'}>Hola mundo</ButtonText>
          <ButtonIcon size={'sm'} path={mdiContentSave} />
        </Button>

        <Button action={'secondary'}>
          <ButtonIcon fill={'$primary500'} path={mdiContentSave} />
          <ButtonText color={'$primary500'}>Hola mundo</ButtonText>
          <ButtonIcon fill={'$primary500'} path={mdiContentSave} />
        </Button>

        <Button size={'lg'}>
          <ButtonIcon size={'lg'} path={mdiContentSave} />
          <ButtonText size={'lg'}>Hola mundo</ButtonText>
          <ButtonIcon size={'lg'} path={mdiContentSave} />
        </Button>
      </View>
    </View>
  );
};

export default ButtonExample;
