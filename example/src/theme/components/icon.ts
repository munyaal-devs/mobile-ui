import type { IconFactoryConfiguration } from '@munyaal/mobile-ui';

export const icon: IconFactoryConfiguration = {
  variants: {
    size: {
      'xs': {
        width: '$4',
        height: '$4',
      },
      'sm': {
        width: '$5',
        height: '$5',
      },
      'md': {
        width: '$6',
        height: '$6',
      },
      'lg': {
        width: '$7',
        height: '$7',
      },
      'xl': {
        width: '$8',
        height: '$8',
      },
      '2xl': {
        width: '$9',
        height: '$9',
      },
      '3xl': {
        width: '$10',
        height: '$10',
      },
      '4xl': {
        width: '$11',
        height: '$11',
      },
      '5xl': {
        width: '$12',
        height: '$12',
      },
      '6xl': {
        width: '$13',
        height: '$13',
      },
    },
  },
  defaultProps: {
    size: 'md',
    fill: '$text900',
  },
};
