import { mdiAngular, mdiReact, mdiVuejs } from '@mdi/js';
import { Heading, Icon, View } from '@munyaal/mobile-ui';
import * as React from 'react';

const IconExample = () => {
  return (
    <View flexDirection={'column'} gap={'$4'}>
      <Heading>Icon Component</Heading>

      <View
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-around'}
      >
        <Icon path={mdiVuejs} size={'xs'} fill={'$secondary500'} />
        <Icon path={mdiReact} size={'md'} fill={'$primary500'} />
        <Icon path={mdiAngular} size={'xl'} fill={'$text600'} />
      </View>
    </View>
  );
};

export default IconExample;
