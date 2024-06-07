import type { TextFactoryConfiguration } from '@munyaal/mobile-ui';

export const text: TextFactoryConfiguration = {
  color: '$text800',
  variants: {
    size: {
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
    },
    weight: {
      light: { fontWeight: '$light' },
      medium: { fontWeight: '$medium' },
      normal: { fontWeight: '$normal' },
      semibold: { fontWeight: '$semibold' },
      bold: { fontWeight: '$bold' },
    },
  },
  defaultProps: {
    size: 'md',
    weight: 'medium',
  },
};
