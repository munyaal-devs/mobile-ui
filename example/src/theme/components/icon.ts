import type { IconFactoryConfiguration } from '@munyaal/mobile-ui';

export const icon: IconFactoryConfiguration = {
  variants: {
    size: {
      'xs': {
        width: '$3.5',
        height: '$3.5',
      },
      'sm': {
        width: '$4',
        height: '$4',
      },
      'md': {
        width: '$4.5',
        height: '$4.5',
      },
      'lg': {
        width: '$5',
        height: '$5',
      },
      'xl': {
        width: '$5.5',
        height: '$5.5',
      },
      '2xl': {
        width: '$6',
        height: '$6',
      },
      '3xl': {
        width: '$6.5',
        height: '$6.5',
      },
      '4xl': {
        width: '$7',
        height: '$7',
      },
      '5xl': {
        width: '$7.5',
        height: '$7.5',
      },
      '6xl': {
        width: '$8',
        height: '$8',
      },
    },
  },
  defaultProps: {
    size: 'md',
    fill: '$text900',
  },
};
