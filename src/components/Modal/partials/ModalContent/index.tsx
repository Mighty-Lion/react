import { PropsWithChildren } from 'react';
import { ModalTitle } from '@/components/Modal/index.styles';

interface IModalContentProps {
  title: string;
}
export function ModalContent({
  title,
  children,
}: PropsWithChildren<IModalContentProps>) {
  return (
    <>
      <ModalTitle>{title}</ModalTitle>
      {children}
    </>
  );
}
