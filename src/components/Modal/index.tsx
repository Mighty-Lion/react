import {
  ModalClose,
  ModalContainer,
  ModalWrapper,
} from '@/components/Modal/index.styles';
import { CreateCard } from '@/components/CreateCard';
import { ModalContent } from '@/components/Modal/partials/ModalContent';
import closeSvg from '@/assets/images/close.svg';

export interface IModalProps {
  title: string;
  isOpen: boolean;
  close: () => void;
}

export function Modal({ title, isOpen, close }: IModalProps) {
  if (isOpen) {
    return (
      <ModalWrapper onClick={close}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <ModalClose onClick={close}>
            <img src={closeSvg} alt="close img" />
          </ModalClose>
          <ModalContent title={title}>
            <CreateCard />
          </ModalContent>
        </ModalContainer>
      </ModalWrapper>
    );
  }

  return <></>;
}
