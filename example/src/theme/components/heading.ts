import type { HeadingFactoryConfiguration } from '@munyaal/mobile-ui';

export const heading: HeadingFactoryConfiguration = {
  color: '$text900',
  variants: {
    size: {
      xs: { fontSize: '$lg' },
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$3xl' },
      xl: { fontSize: '$4xl' },
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
