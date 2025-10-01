import React, { type FC } from 'react';
import {
  Button,
  ButtonText,
  Heading,
  useToast,
  toastStyleSuccess,
  toastStyleError,
  toastStyleWarning,
  toastStyleInfo,
  View,
} from '@munyaal/mobile-ui';
import { mdiCheck, mdiClose, mdiCloud, mdiExclamation } from '@mdi/js';

const ToastExample: FC = () => {
  const { showToast } = useToast();

  return (
    <View flexDirection={'column'} gap={'$4'}>
      <Heading>Toast Example</Heading>

      <View gap={'$4'} flexDirection="row">
        <Button
          variant={'outline'}
          onPress={() =>
            showToast({
              message: 'Tarjeta guardada con éxito',
              icon: mdiCheck,
              style: toastStyleSuccess,
            })
          }
        >
          <ButtonText color={'$primary500'}>Success</ButtonText>
        </Button>

        <Button
          onPress={() =>
            showToast({
              message: 'Error al guardar la tarjeta',
              icon: mdiClose,
              style: toastStyleError,
            })
          }
        >
          <ButtonText>Error</ButtonText>
        </Button>

        <Button
          variant={'outline'}
          onPress={() =>
            showToast({
              message: 'Advertencia: tarjeta no válida',
              icon: mdiExclamation,
              style: toastStyleWarning,
            })
          }
        >
          <ButtonText color={'$primary500'}>Warning</ButtonText>
        </Button>

        <Button
          onPress={() =>
            showToast({
              message: 'Información: tarjeta guardada',
              icon: mdiCloud,
              style: toastStyleInfo,
            })
          }
        >
          <ButtonText>Info</ButtonText>
        </Button>
      </View>
    </View>
  );
};

export default ToastExample;
