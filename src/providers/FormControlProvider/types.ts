import type { Dispatch, SetStateAction } from 'react';

export type FormControlState = {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isFocused?: boolean;
};

export type FormControlFunctions = {
  setIsFocused?: Dispatch<SetStateAction<boolean>>;
};

export type FormControlContext = FormControlState & FormControlFunctions;
