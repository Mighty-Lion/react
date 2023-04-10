import { FC, useState } from 'react';
import { IModalProps, Modal } from '@/components/Modal';
import { CreateCard } from '@/components/CreateCard';
import { ICarsCardProps } from '@/components/Cars/partials/CarsCard';
import { carsArray } from '@/components/Cars';

export interface IModalCreateCardProps extends IModalProps {
  newValue?: ICarsCardProps;
  addValue: (newValue: ICarsCardProps) => void;
}

export function useAddElement() {
  const [theArray, setTheArray] = useState(carsArray);

  const addValue = (newValue: ICarsCardProps) => {
    console.log('addValue');
    setTheArray((prev) => [...prev, newValue]);
    console.log(theArray);
  };

  return { theArray, addValue };
}
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
