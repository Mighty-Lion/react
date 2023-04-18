import plusSvg from '@/assets/images/plus.svg';

import {
  AddButton,
  AddButtonImg,
} from '@/pages/Home/partials/Button/index.styles';
import { useModalController } from '@/hooks/useModalController';
import { ModalCreateCard } from '@/modals/ModalCreateCard';
import { Car } from '@/pages/Home/partials/CarsCard';
import { CarsWrapper } from '@/pages/Home/index.styles';
import { useAddElement } from '@/modals/ModalCreateCard/useAddElement';

export default function Home() {
  const { isOpen, open, close } = useModalController();
  const { theArray, addValue } = useAddElement();

  const renderedCarItems = theArray.map((item) => (
    <Car
      key={item.imgSrc + item.name + item.year}
      imgSrc={item.imgSrc}
      name={item.name}
      year={item.year}
      country={item.country}
    />
  ));

  return (
    <CarsWrapper>
      {renderedCarItems}
      <ModalCreateCard
        isOpen={isOpen}
        close={close}
        title="Title"
        addValue={addValue}
      />
      <AddButton onClick={open}>
        <AddButtonImg src={plusSvg} alt="plus svg" />
      </AddButton>
    </CarsWrapper>
  );
}
