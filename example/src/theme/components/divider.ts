import type { DividerFactoryConfiguration } from '@munyaal/mobile-ui';

export const divider: DividerFactoryConfiguration = {
  backgroundColor: '$background200',
  variants: {
    orientation: {
      vertical: {
        width: '$0.5',
        height: '$full',
      },
      horizontal: {
        height: '$0.5',
        width: '$full',
      },
    },
  },
  defaultProps: {
    orientation: 'horizontal',
  },
};
