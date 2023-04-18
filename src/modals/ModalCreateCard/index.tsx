import { Modal } from '@/components/Modal';
import { CreateCard } from '@/components/CreateCard';
import { IAddElementProps } from '@/modals/ModalCreateCard/useAddElement';

export function ModalCreateCard({
  title,
  isOpen,
  close,
  addValue,
}: IAddElementProps) {
  return (
    <Modal title={title} isOpen={isOpen} close={close}>
      <CreateCard addValue={addValue} close={close} />
    </Modal>
  );
}
