import type { ButtonIconFactoryConfiguration } from '@munyaal/mobile-ui';

export const buttonIcon: ButtonIconFactoryConfiguration = {
  variants: {
    size: {
      sm: {
        width: '$4',
        height: '$4',
      },
      md: {
        width: '$4.5',
        height: '$4.5',
      },
      lg: {
        width: '$5',
        height: '$5',
      },
    },
  },
  defaultProps: {
    size: 'md',
    fill: '$text50',
  },
};
