import type { UseComponentHeadingProps } from './types';
import { useMemo } from 'react';
import { defaultStyles, fontSizes } from './styles';

export const useComponentHeading = (props: UseComponentHeadingProps) => {
  const { size = 'md', ...nativeProps } = props;

  const styles = useMemo(() => {
    return [defaultStyles.default, fontSizes[size]];
  }, [size]);

  return {
    styles,
    nativeProps,
  };
};
