import type { VStackFactoryConfiguration } from '@munyaal/mobile-ui';

export const vStack: VStackFactoryConfiguration = {
  flexDirection: 'column',
  variants: {
    space: {
      xs: {
        gap: `$1`,
      },
      sm: {
        gap: `$2`,
      },
      md: {
        gap: `$3`,
      },
      lg: {
        gap: `$4`,
      },
      xl: {
        gap: `$5`,
      },
    },
    reversed: {
      true: {
        flexDirection: 'column-reverse',
      },
    },
  },
  defaultProps: {
    space: 'md',
  },
};
