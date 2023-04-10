import { Modal } from '@/modals/Modal';
import { CreateCard } from '@/components/CreateCard';
import { IModalCreateCardProps } from '@/components/ModalCreateCard/useAddElement';

export function ModalCreateCard({
  title,
  isOpen,
  close,
  addValue,
}: IModalCreateCardProps) {
  return (
    <Modal title={title} isOpen={isOpen} close={close}>
      <CreateCard addValue={addValue} />
    </Modal>
  );
}
