import { type ToastProps as ToastParams } from '../../providers/ToastProvider/types';

export type ToastContentProps = ToastParams;

export type ToastProps = Omit<ToastParams, 'time'>;
