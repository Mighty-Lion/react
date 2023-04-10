import { Modal } from '@/modals/Modal';
import { CreateCard } from '@/components/CreateCard';
import { IAddElementProps } from '@/components/ModalCreateCard/useAddElement';

export function ModalCreateCard({
  title,
  isOpen,
  close,
  addValue,
}: IAddElementProps) {
  return (
    <Modal title={title} isOpen={isOpen} close={close}>
      <CreateCard addValue={addValue} />
    </Modal>
  );
}
