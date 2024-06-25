import React, {
  type FC,
  type PropsWithChildren,
  useMemo,
  useState,
} from 'react';
import { View } from 'react-native';
import type { FormControlStateProvider, NativeFormControlProps } from './types';
import ComponentContextProvider from '../../providers/ComponentContextProvider';

const FormControl: FC<PropsWithChildren<NativeFormControlProps>> = (props) => {
  const {
    isInvalid = false,
    isDisabled = false,
    isRequired = false,
    isReadOnly = false,
    children,
    ...viewProps
  } = props;

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const states: FormControlStateProvider = useMemo(() => {
    return {
      isInvalid,
      isDisabled,
      isRequired,
      isReadOnly,
      isFocused,
      setIsFocused,
    };
  }, [isInvalid, isDisabled, isRequired, isReadOnly, isFocused, setIsFocused]);

  return (
    <ComponentContextProvider states={states}>
      <View {...viewProps}>{children}</View>
    </ComponentContextProvider>
  );
};

export default FormControl;
