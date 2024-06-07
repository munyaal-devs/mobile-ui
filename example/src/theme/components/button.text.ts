import type { ButtonTextFactoryConfiguration } from '@munyaal/mobile-ui';

export const buttonText: ButtonTextFactoryConfiguration = {
  color: '$text50',
  fontWeight: '$light',
  variants: {
    size: {
      sm: {
        fontSize: '$md',
        lineHeight: '$md',
      },
      md: {
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      lg: {
        fontSize: '$xl',
        lineHeight: '$xl',
      },
    },
  },
  defaultProps: {
    size: 'md',
  },
};
