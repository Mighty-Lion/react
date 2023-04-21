import { Modal } from '@/components/Modal';
import { CreateCard } from '@/components/CreateCard';
import { IAddElementProps } from '@/modals/ModalCreateCard/useEditCards';

export function ModalCreateCard({
  title,
  isOpen,
  close,
  editCards,
}: IAddElementProps) {
  return (
    <Modal title={title} isOpen={isOpen} close={close}>
      <CreateCard editCards={editCards} close={close} selectedCard={selectedCard} />
    </Modal>
  );
}
