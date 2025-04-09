import React, {
  createContext,
  useContext,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';
import type { ToastProps, ToastContextState } from './types';
import { Toast } from '../../components';

const initialState: ToastContextState = {
  showToast: () => {
    // do nothing
  },
};

const ToastContext = createContext<ToastContextState>(initialState);

export const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toast, setToast] = useState<ToastProps | null>(null);

  const showToast = (params: ToastProps) => {
    const { time = 2000, ...othersParams } = params;

    setToast({ time, ...othersParams });

    setTimeout(() => setToast(null), time);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {!!toast && <Toast {...toast} />}
    </ToastContext.Provider>
  );
};

// Hook para usar el toast en cualquier parte de la app
export const useToast = () => {
  return useContext(ToastContext);
};
