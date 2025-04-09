import type {
  BasicSizesKey,
  BorderRadiusKey,
  Colors,
  DimensionsStyle,
  PaddingStyle,
  SpaceKey,
} from '../../types';

export type ToastStyle = {
  iconSize?: BasicSizesKey;
  iconColor?: `$${keyof Colors}` | `#${string}`;
  messageSize?: BasicSizesKey;
  messageColor?: `$${keyof Colors}` | `#${string}`;
  contentRounded?: DimensionsStyle['borderRadius'] | `$${BorderRadiusKey}`;
  contentPadding?: PaddingStyle['padding'] | `$${SpaceKey}`;
  contentBackgroundColor?: `$${keyof Colors}` | `#${string}`;
};

export type ToastProps = {
  message: string;
  time?: number;
  icon?: string;
  style?: ToastStyle;
};

export type ToastContextState = {
  showToast: (toast: ToastProps) => void;
};
