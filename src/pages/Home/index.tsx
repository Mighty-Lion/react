import plusSvg from '@/assets/images/plus.svg';

import {
  AddButton,
  AddButtonImg,
} from '@/pages/Home/partials/Button/index.styles';
import { useModalController } from '@/hooks/useModalController';
import { ModalCreateCard } from '@/modals/ModalCreateCard';
import { Car } from '@/pages/Home/partials/CarsCard';
import { CarsWrapper } from '@/pages/Home/index.styles';
import {
  carsArray,
  useAddElement,
} from '@/modals/ModalCreateCard/useAddElement';

const renderedCarItems = carsArray.map((item) => (
  <Car
    key={item.imgSrc + item.name}
    imgSrc={item.imgSrc}
    name={item.name}
    year={item.year}
    country={item.country}
  />
));

export default function Home() {
  const { isOpen, open, close } = useModalController();
  const { addValue } = useAddElement();

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
