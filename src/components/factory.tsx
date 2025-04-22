import React, {
  type ComponentType,
  type FC,
  forwardRef,
  memo,
  type PropsWithChildren,
} from 'react';
import type { ComponentConfigurationsKey, ComponentProps } from '../types';
import { useFactory } from '../hooks/useFactory';

export function factory<Props extends ComponentProps>(
  Component: ComponentType<PropsWithChildren<Props>>,
  name: ComponentConfigurationsKey
) {
  const FunctionalComponent: FC<PropsWithChildren<Props>> = (
    props: PropsWithChildren<Props>
  ) => {
    const { children, ...allProps } = props;

    const { properties, styles } = useFactory(allProps, name);

    return (
      <Component {...properties} style={styles}>
        {children}
      </Component>
    );
  };

  return memo(FunctionalComponent);
}

export function factoryWithRef<Props extends ComponentProps, Ref>(
  Component: ComponentType<PropsWithChildren<Props>>,
  name: ComponentConfigurationsKey
) {
  const FunctionalComponent = forwardRef<Ref, PropsWithChildren<Props>>(
    (props, ref) => {
      const { children, ...allProps } = props;

      const { properties, styles } = useFactory(allProps, name);

      return (
        <Component {...properties} style={styles} ref={ref}>
          {children}
        </Component>
      );
    }
  );

  return memo(FunctionalComponent);
}
