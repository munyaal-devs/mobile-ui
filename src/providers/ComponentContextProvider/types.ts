import type { PropsWithChildren } from 'react';

export type ComponentContextState<States = any> = {
  states: States;
};

export type ComponentContextProviderProps<States> = PropsWithChildren<
  ComponentContextState<States>
>;
