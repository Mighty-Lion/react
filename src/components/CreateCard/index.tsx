import {ReactNode, useContext} from 'react';
import { useModalController } from '@/hooks/useModalController';
import { IModalProps } from '@/components/Modal';


export function CreateCard({ close }: IModalProps) {
  return (
    <form action="">
      <div onClick={close}>X</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, cumque
        delectus deserunt dicta eos incidunt laboriosam laborum molestias,
        praesentium qui quia quo voluptatem. Amet aperiam delectus dolorum
        facilis magnam nam.
      </div>
      <div>
        Accusantium animi beatae culpa cupiditate debitis delectus dicta
        doloremque earum enim eos explicabo ipsum nostrum nulla officia optio,
        pariatur perferendis perspiciatis porro possimus quam quis sequi sunt
        tempore ullam, unde.
      </div>
    </form>
  );
}
