import { PropsWithChildren, ReactNode } from 'react';
import {
  ModalContent,
  ModalWrapper,
} from '@/components/Modal/partials/index.styles';
import { useModalController } from '@/hooks/useModalController';

export interface IModalProps {
  content: PropsWithChildren;
  isOpen: boolean;
  close: () => void;
}

export function Modal({ content, isOpen, close }: IModalProps) {
  console.log('Modal');
  let modal = <></>;
  if (isOpen === true) {
    modal = (
      <ModalWrapper onClick={close}>
        <ModalContent
          onClick={(e) => e.stopPropagation()}
        >
          {content}
        </ModalContent>
      </ModalWrapper>
    );
  } else {
    modal = <></>;
  }

  return <>{modal}</>;
}
