import { IModalProps, Modal } from '@/components/Modal';
import {
  CreateCardButton,
  CreateCardErrorMessage,
  CreateCardField,
  CreateCardFieldWrapper,
  CreateCardForm,
  CreateCardLabel,
} from '@/modals/CreateCardModal/index.styles';
import { useCreateCardModal } from '@/modals/CreateCardModal/useCreateCardModal';
import { ICarsCardProps } from '@/pages/Home/partials/CarsCard';

export interface ICreateCardModalProps extends IModalProps {
  // editCards?: (newValue: ICarsCardProps) => void;
  redactCards: (newValue: ICarsCardProps) => void;
  selectedCard?: ICarsCardProps | undefined;
}
export function CreateCardModal({
  title,
  isOpen,
  close,
  redactCards,

  selectedCard,
}: ICreateCardModalProps) {
  const { formik } = useCreateCardModal({
    redactCards,
    close,
    selectedCard,
    isOpen,
  });

  return (
    <Modal title={title} isOpen={isOpen} close={close}>
      <CreateCardForm onSubmit={formik.handleSubmit}>
        <CreateCardLabel htmlFor="imgSrc">Enter image url </CreateCardLabel>
        <CreateCardFieldWrapper>
          <CreateCardField
            id="imgSrc"
            name="imgSrc"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imgSrc}
            isValid={!(formik.errors.imgSrc && formik.touched.imgSrc)}
          />
          {formik.errors.imgSrc && formik.touched.imgSrc ? (
            <CreateCardErrorMessage>
              {formik.errors.imgSrc}
            </CreateCardErrorMessage>
          ) : null}
        </CreateCardFieldWrapper>

        <CreateCardLabel htmlFor="name">Enter Name</CreateCardLabel>
        <CreateCardFieldWrapper>
          <CreateCardField
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            isValid={!(formik.errors.name && formik.touched.name)}
          />
          {formik.errors.name && formik.touched.name ? (
            <CreateCardErrorMessage>
              {formik.errors.name}
            </CreateCardErrorMessage>
          ) : null}
        </CreateCardFieldWrapper>

        <CreateCardLabel htmlFor="year">Enter year</CreateCardLabel>
        <CreateCardFieldWrapper>
          <CreateCardField
            id="year"
            name="year"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.year}
            isValid={!(formik.errors.year && formik.touched.year)}
          />
          {formik.errors.year && formik.touched.year ? (
            <CreateCardErrorMessage>
              {formik.errors.year}
            </CreateCardErrorMessage>
          ) : null}
        </CreateCardFieldWrapper>

        <CreateCardLabel htmlFor="country">Enter country</CreateCardLabel>
        <CreateCardFieldWrapper>
          <CreateCardField
            id="country"
            name="country"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.country}
            isValid={!(formik.errors.country && formik.touched.country)}
          />
          {formik.errors.country && formik.touched.country ? (
            <CreateCardErrorMessage>
              {formik.errors.country}
            </CreateCardErrorMessage>
          ) : null}
        </CreateCardFieldWrapper>

        <CreateCardButton type="submit" disabled={!formik.isValid}>
          Submit
        </CreateCardButton>
      </CreateCardForm>
    </Modal>
  );
}
