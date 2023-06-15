import { useEffect, useState } from 'react';
import axios from 'axios';
import { ICarsCardProps } from '@/pages/Home/partials/CarsCard';
import Bmw from '@/assets/images/bmw_e34.jpg';
import HondaS200 from '@/assets/images/honda_s2000.jpg';
import LamborghiniAventador from '@/assets/images/lamborghini_aventado.jpg';
import McLarenP1 from '@/assets/images/mclaren_p1.jpg';
import MercedesBenzSClassW222 from '@/assets/images/mercedesbenz_sclass_w222.jpg';
import OpelSpeedster from '@/assets/images/opel_speedster.jpg';
import Porsche911 from '@/assets/images/porsche_911.jpg';
import { useToastNotifications } from '@/components/ToastMessage/useToastNotifications';

export function useEditCards() {
  const savedCarsArray = localStorage.getItem('savedCarsArray');
  const parsedCarsArray = savedCarsArray && JSON.parse(savedCarsArray);
  const apiUrl = 'https://646b784e7d3c1cae4ce3d933.mockapi.io/api/Cars';
  const toastNotifications = useToastNotifications();

  const [carsArray, setCarsArray] = useState<ICarsCardProps[]>(
    parsedCarsArray || []
  );
  const [selectedCard, setSelectedCard] = useState<ICarsCardProps | undefined>(
    undefined
  );
  const [isFetching, setIsFetching] = useState(false);

  async function fetchData() {
    try {
      setIsFetching(true);
      const response = await axios(apiUrl);
      setCarsArray(response.data);
      console.log(response);
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log('handelSendReminder', errorMessage);
      toastNotifications.handleFailure(errorMessage);
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function addCard(newValue: ICarsCardProps) {
    try {
      setIsFetching(true);
      const lastCardId =
        carsArray.length === 0 ? 0 : carsArray[carsArray.length - 1].id;
      const id = String(Number(lastCardId) + 1);
      const newCardData = { ...newValue, id };
      await axios.post(apiUrl, newCardData);
      setCarsArray((prev) => {
        return [...prev, { ...newValue, id }];
      });
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
      toastNotifications.handleFailure(errorMessage);
    } finally {
      setIsFetching(false);
    }
  }

  async function editCard(newValue: ICarsCardProps) {
    try {
      setIsFetching(true);
      const id = selectedCard?.id;
      console.log(`Card ${selectedCard?.id} edited`);
      await axios.put(`${apiUrl}/${selectedCard?.id}`, { ...newValue, id });
      setCarsArray((prev) => {
        return prev.map((item) => {
          return id === item.id ? { ...newValue, id } : item;
        });
      });
      setSelectedCard(undefined);
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
      toastNotifications.handleFailure(errorMessage);
    } finally {
      setIsFetching(false);
    }
  }
  function redactCards(newValue: ICarsCardProps) {
    if (!selectedCard?.id) {
      addCard(newValue);
    } else {
      editCard(newValue);
    }
  }
  async function removeCard(card: ICarsCardProps) {
    try {
      setIsFetching(true);
      console.log(`Post ${card.id} deleted`);
      await axios.delete(`${apiUrl}/${card.id}`);
      setCarsArray((prev) => prev.filter((item) => item.id !== card.id));
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
      toastNotifications.handleFailure(errorMessage);
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(
    () => localStorage.setItem('savedCarsArray', JSON.stringify(carsArray)),
    [carsArray]
  );

  return {
    carsArray,
    setCarsArray,
    selectedCard,
    setSelectedCard,
    removeCard,
    redactCards,
  };
}
