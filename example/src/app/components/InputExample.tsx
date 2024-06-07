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
          <FormControlErrorText>
            Introduce el correo electrónico de su cuenta
          </FormControlErrorText>
        </FormControl>

        <FormControl>
          <FormControlLabel>Contraseña</FormControlLabel>
          <Input>
            <InputField />
          </Input>
          <FormControlHelperText>
            Introduce la contraseña de su cuenta
          </FormControlHelperText>
          <FormControlErrorText>
            Introduce el correo electrónico de su cuenta
          </FormControlErrorText>
        </FormControl>
      </View>
    </View>
  );
};

export default InputExample;
