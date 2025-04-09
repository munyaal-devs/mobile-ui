import type { ToastStyle } from '../../providers/ToastProvider/types';
import ToastComponent from './Component';

export const Toast = ToastComponent;

export const toastStyleSuccess: ToastStyle = {
  contentBackgroundColor: '$success50',
  iconColor: '$success700',
  messageColor: '$success700',
};
export const toastStyleError: ToastStyle = {
  contentBackgroundColor: '$error50',
  iconColor: '$error700',
  messageColor: '$error700',
};
export const toastStyleWarning: ToastStyle = {
  contentBackgroundColor: '$warning50',
  iconColor: '$warning700',
  messageColor: '$warning700',
};
export const toastStyleInfo: ToastStyle = {
  contentBackgroundColor: '$info50',
  iconColor: '$info700',
  messageColor: '$info700',
};
