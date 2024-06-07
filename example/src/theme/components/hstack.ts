import type { HStackFactoryConfiguration } from '@munyaal/mobile-ui';

export const hStack: HStackFactoryConfiguration = {
  flexDirection: 'row',
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
        flexDirection: 'row-reverse',
      },
    },
  },
  defaultProps: {
    space: 'md',
  },
};
