import type { UseComponentHeadingProps } from './types';
import { useMemo } from 'react';
import { fontSizes, fontWeights, textAligns } from './styles';

export const useComponentHeading = (props: UseComponentHeadingProps) => {
  const {
    size = 'md',
    weight = 'bold',
    align = 'left',
    ...nativeProps
  } = props;

  const styles = useMemo(() => {
    return [fontSizes[size], fontWeights[weight], textAligns[align]];
  }, [size, weight, align]);

  return {
    styles,
    nativeProps,
  };
};
