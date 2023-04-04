import { useCallback, useState } from 'react';


export function useModalController() {
  let [isOpen, setIsOpen] = useState(false);

  let toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  let open = useCallback(() => {
    console.log('open');
    // console.log({ isOpen });
    setIsOpen(true);
    console.log({ isOpen });
  }, [isOpen, setIsOpen]);
  let close = useCallback(() => {
    console.log('close');
    // console.log({ isOpen });
    setIsOpen(false);
    console.log({ isOpen });
  }, [isOpen, setIsOpen]);

  return {
    isOpen,
    toggle,
    open,
    close,
  };
}
