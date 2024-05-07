import { mdiReact } from '@mdi/js';
import { Heading, Icon, View } from '@munyaal/mobile-ui';
import * as React from 'react';

const IconExample = () => {
  return (
    <View flexDirection={'column'} gap={'$4'}>
      <Heading>Icon Component</Heading>

      <View flexDirection={'row'} justifyContent={'space-around'} gap={'$4'}>
        <Icon path={mdiReact} size={'$12'} color={'$secondary500'} />
        <Icon path={mdiReact} size={'$12'} color={'$primary500'} />
        <Icon path={mdiReact} size={'$12'} />
      </View>
    </View>
  );
};

export default IconExample;
