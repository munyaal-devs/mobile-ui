import React, {
  type ComponentType,
  type FC,
  memo,
  type PropsWithChildren,
} from 'react';
import type {
  ComponentConfigurationsKey,
  ComponentProps,
  ComponentVariantProps,
} from '../types';
import { useComponentBuilder } from '../hooks';

export function factory<
  P extends ComponentProps,
  V extends Object = {},
  E extends Object = {},
>(
  Component: ComponentType<PropsWithChildren<P>>,
  componentName: ComponentConfigurationsKey
) {
  type Props = PropsWithChildren<ComponentVariantProps<V> & P & E>;

  const FunctionalComponent: FC<Props> = (props: Props) => {
    const { children, ...allProps } = props;

    const { styles, properties } = useComponentBuilder<Props>(
      componentName,
      allProps
    );

    return (
      <Component {...properties} style={styles}>
        {children}
      </Component>
    );
  };

  return memo(FunctionalComponent);
}
