import React, { createContext, useContext } from 'react';
import type {
  ComponentContextProviderProps,
  ComponentContextState,
} from './types';

const initialState: ComponentContextState = {
  states: {},
};

const ComponentContext = createContext<ComponentContextState>(initialState);

function ComponentContextProvider<T>(props: ComponentContextProviderProps<T>) {
  const { states, children } = props;

  return (
    <ComponentContext.Provider value={{ states }}>
      {children}
    </ComponentContext.Provider>
  );
}

export function useComponentContextProvider<
  T = any,
>(): ComponentContextState<T> {
  return useContext<ComponentContextState<T>>(ComponentContext);
}

export default ComponentContextProvider;
