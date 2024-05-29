import React, { type FC } from 'react';
import {
  FormControl,
  FormControlErrorText,
  FormControlHelperText,
  FormControlLabel,
  Heading,
  Input,
  InputField,
  View,
} from '@munyaal/mobile-ui';

const InputExample: FC = () => {
  return (
    <View flexDirection={'column'} gap={'$4'}>
      <Heading>Input Component</Heading>

      <View flexDirection={'column'} gap={'$4'}>
        <FormControl>
          <FormControlLabel>Correo electrónico</FormControlLabel>
          <Input>
            <InputField />
          </Input>
          <FormControlHelperText>
            Introduce el correo electrónico de su cuenta
          </FormControlHelperText>
        </FormControl>

        <FormControl>
          <FormControlLabel>Contraseña</FormControlLabel>
          <Input isInvalid>
            <InputField />
          </Input>
          <FormControlErrorText>Este campo es requerido</FormControlErrorText>
        </FormControl>

        <FormControl>
          <FormControlLabel>Nombre</FormControlLabel>
          <Input>
            <InputField />
          </Input>
          <FormControlHelperText>
            Introduce el correo electrónico de su cuenta
          </FormControlHelperText>
        </FormControl>
      </View>
    </View>
  );
};

export default InputExample;
