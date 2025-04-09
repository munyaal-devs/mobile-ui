import React, { type FC, useCallback, useState } from 'react';
import {
  Button,
  ButtonText,
  FormControl,
  FormControlErrorText,
  FormControlHelperText,
  FormControlLabel,
  Heading,
  Input,
  InputField,
  KeyboardAvoidingView,
  View,
} from '@munyaal/mobile-ui';

const InputExample: FC = () => {
  const [isReadOnly, setIsReadOnly] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const handleToggleReadOnly = useCallback(() => {
    setIsReadOnly((prevState) => !prevState);
  }, [setIsReadOnly]);

  const handleToggleInvalid = useCallback(() => {
    setIsInvalid((prevState) => !prevState);
  }, [setIsInvalid]);

  return (
    <View flexDirection={'column'} gap={'$4'}>
      <KeyboardAvoidingView>
        <Heading>Input Component</Heading>

        <View flexDirection={'column'} gap={'$4'}>
          <FormControl isInvalid={isInvalid} isReadOnly={isReadOnly}>
            <FormControlLabel>Correo electrónico</FormControlLabel>
            <Input>
              <InputField
                placeholder={'Hello'}
                placeholderTextColor={'$primary500'}
              />
            </Input>
            {!isInvalid ? (
              <FormControlHelperText>
                Introduce la contraseña de su cuenta
              </FormControlHelperText>
            ) : (
              <FormControlErrorText>
                Introduce el correo electrónico de su cuenta
              </FormControlErrorText>
            )}
          </FormControl>

          <FormControl isInvalid={isInvalid} isReadOnly={isReadOnly}>
            <FormControlLabel>Contraseña</FormControlLabel>
            <Input>
              <InputField />
            </Input>
            {!isInvalid ? (
              <FormControlHelperText>
                Introduce la contraseña de su cuenta
              </FormControlHelperText>
            ) : (
              <FormControlErrorText>
                Introduce el correo electrónico de su cuenta
              </FormControlErrorText>
            )}
          </FormControl>

          <Button onPress={handleToggleReadOnly}>
            <ButtonText>ReadOnly {isReadOnly ? 'true' : 'false'}</ButtonText>
          </Button>

          <Button onPress={handleToggleInvalid}>
            <ButtonText>Invalid {isInvalid ? 'true' : 'false'}</ButtonText>
          </Button>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default InputExample;
