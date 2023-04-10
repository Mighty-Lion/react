import { FC, PropsWithChildren } from 'react';
import {
  ModalClose,
  ModalContainer,
  ModalTitle,
  ModalWrapper,
} from '@/modals/Modal/index.styles';
import closeSvg from '@/assets/images/close.svg';

export interface IModalProps {
  title?: string;
  isOpen?: boolean;
  close?: () => void;
}

export function Modal({
  title,
  isOpen,
  close,
  children,
}: PropsWithChildren<IModalProps>) {
  if (isOpen) {
    return (
      <ModalWrapper onClick={close}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <ModalClose onClick={close}>
            <img src={closeSvg} alt="close img" />
          </ModalClose>
          <ModalTitle>{title}</ModalTitle>
          {children}
        </ModalContainer>
      </ModalWrapper>
    );
  }

  return <></>;
}