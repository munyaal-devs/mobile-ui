import type { TextStyle, ViewStyle } from 'react-native';
import type { ColorKey, SpaceKey } from './../types';

export type ViewSpecificStyles = {
  flex?: ViewStyle['flex'];
  flexDirection?: ViewStyle['flexDirection'];
  direction?: ViewStyle['direction'];
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
  alignSelf?: ViewStyle['alignSelf'];
  alignContent?: ViewStyle['alignContent'];
  flexWrap?: ViewStyle['flexWrap'];
  flexBasis?: ViewStyle['flexBasis'];
  flexGrow?: ViewStyle['flexGrow'];
  flexShrink?: ViewStyle['flexShrink'];
  rowGap?: ViewStyle['rowGap'] | `$${SpaceKey}`;
  columnGap?: ViewStyle['columnGap'] | `$${SpaceKey}`;
  gap?: ViewStyle['gap'] | `$${SpaceKey}`;
  position?: ViewStyle['position'];
};

export type TextSpecificStyles = {
  color?: TextStyle['color'] | `$${ColorKey}`;
};
