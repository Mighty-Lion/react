import { createContext, PropsWithChildren, useState } from 'react';
import exp from 'constants';

interface IModalContext {
  modal: boolean;
  open: () => void;
  close: () => void;
}
export const ModalContext = createContext<IModalContext>({
  modal: false,
  open: () => {},
  close: () => {},
});
export function ModalState({ children }: PropsWithChildren) {
  const [modal, setModal] = useState(false);

  const open = () => setModal(true);
  const close = () => setModal(false);

  return (
    <ModalContext.Provider value={{ modal, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}
