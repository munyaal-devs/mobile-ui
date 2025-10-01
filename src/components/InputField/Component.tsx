import React, {
  forwardRef,
  useCallback,
  useMemo,
  type PropsWithoutRef,
  type ForwardRefRenderFunction,
} from 'react';
import type { TextInputProps, FocusEvent, BlurEvent } from 'react-native';
import { TextInput } from 'react-native';
import { useComponentContextProvider } from '../../providers/ComponentContextProvider';
import type { FormControlStateProvider } from '../FormControl/types';

const InputField: ForwardRefRenderFunction<
  TextInput,
  PropsWithoutRef<TextInputProps>
> = (props, ref) => {
  const {
    states: { setIsFocused, isDisabled, isReadOnly },
  } = useComponentContextProvider<FormControlStateProvider>();

  const handleFocus = useCallback(
    (e: FocusEvent) => {
      setIsFocused(true);
      props.onFocus?.(e);
    },
    [setIsFocused, props]
  );

  const handleBlur = useCallback(
    (e: BlurEvent) => {
      setIsFocused(false);
      props.onBlur?.(e);
    },
    [setIsFocused, props]
  );

  const readOnly = useMemo(
    () => isReadOnly || isDisabled,
    [isReadOnly, isDisabled]
  );

  return (
    <TextInput
      {...props}
      ref={ref}
      readOnly={readOnly}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default forwardRef(InputField);
