import { useEffect } from 'react';
import plusSvg from '@/assets/images/plus.svg';

import {
  AddButton,
  AddButtonImg,
} from '@/pages/Home/partials/Button/index.styles';
import { useModalController } from '@/hooks/useModalController';
import { CreateCardModal } from '../../modals/CreateCardModal';
import { Car, ICarsCardProps } from '@/pages/Home/partials/CarsCard';
import { useEditCards } from '@/modals/CreateCardModal/useEditCards';
import { CarsWrapper } from '@/pages/Home/index.styles';

export interface ICarProps extends ICarsCardProps {
  onEdit: () => void;
}
export default function Home() {
  const { isOpen, open, close } = useModalController();
  const { theArray, editCards, setSelectedCard, selectedCard } = useEditCards();

  const renderedCarItems = theArray.map((item: ICarsCardProps) => (
    <Car
      key={item.imgSrc + item.name + item.year}
      imgSrc={item.imgSrc}
      name={item.name}
      year={item.year}
      country={item.country}
      onEdit={() => {
        setSelectedCard(item);
        open();
      }}
    />
  ));

  return (
    <CarsWrapper>
      {renderedCarItems}
      <CreateCardModal
        isOpen={isOpen}
        close={close}
        title="Title"
        editCards={editCards}
        selectedCard={selectedCard}
      />
      <AddButton onClick={open}>
        <AddButtonImg src={plusSvg} alt="plus svg" />
      </AddButton>
    </CarsWrapper>
  );
}
