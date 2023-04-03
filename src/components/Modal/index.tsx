import { PropsWithChildren, useContext, useState } from 'react';
import ModalWindow from '@/components/Modal/partials';
import {
  ModalContent,
  ModalWrapper,
} from '@/components/Modal/partials/index.styles';
import { ModalContext } from '@/context/ModalContext';

export function Modal({ children }: PropsWithChildren) {
  console.log('Modal');
  const { modal, open, close } = useContext(ModalContext);

  return (
    <ModalWrapper onClick={() => close()}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
}
