import React, {
  type ComponentType,
  type ForwardedRef,
  forwardRef,
  memo,
  type PropsWithChildren,
} from 'react';

export function ButtonText<P extends PropsWithChildren, T>(
  StyledButtonText: ComponentType<P>
) {
  return memo(
    forwardRef<T, P>((props: P, ref: ForwardedRef<T>) => {
      const { children } = props;

      return (
        <StyledButtonText ref={ref} {...props}>
          {children}
        </StyledButtonText>
      );
    })
  );
}
