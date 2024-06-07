import type { ButtonFactoryConfiguration } from '@munyaal/mobile-ui';

export const button: ButtonFactoryConfiguration = {
  borderRadius: '$sm',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  variants: {
    size: {
      sm: {
        paddingVertical: '$2',
        paddingHorizontal: '$2.5',
      },
      md: {
        paddingVertical: '$2.5',
        paddingHorizontal: '$3',
      },
      lg: {
        paddingVertical: '$3',
        paddingHorizontal: '$3.5',
      },
    },
    action: {
      primary: {
        backgroundColor: '$primary500',
        borderColor: '$primary500',
        borderWidth: '$1',
      },
      secondary: {
        borderColor: '$primary500',
        borderWidth: '$1',
      },
    },
  },
  defaultProps: {
    size: 'md',
    action: 'primary',
    activeOpacity: 0.7,
  },
};
