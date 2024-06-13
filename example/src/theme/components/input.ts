import type { InputFactoryConfiguration } from '@munyaal/mobile-ui';

export const input: InputFactoryConfiguration = {
  'borderWidth': '$1',
  'borderColor': '$primary500',
  'paddingVertical': '$1.5',
  'paddingHorizontal': '$1',
  'flexDirection': 'row',
  'alignItems': 'center',
  'overflow': 'hidden',
  'gap': '$2',
  ':isInvalid': {
    borderColor: '$error500',
  },
  ':isFocused': {
    borderWidth: '$2',
  },
};
