import type { UseComponentTextProps } from './types';
import { useMemo } from 'react';
import { fontSizes, fontWeights, textAligns } from './styles';

export const useComponentText = (props: UseComponentTextProps) => {
  const {
    size = 'md',
    weight = 'medium',
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
