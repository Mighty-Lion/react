import React from 'react';
import {
  CreateCardButton,
  CreateCardErrorMessage,
  CreateCardField,
  CreateCardFieldWrapper,
  CreateCardForm,
  CreateCardLabel,
} from '@/components/CreateCard/index.styles';
import { useCreateCard } from './useCreateCard';
import { IAddElementProps } from '@/modals/ModalCreateCard/useAddElement';

export function CreateCard({ addValue }: IAddElementProps) {
  const { formik } = useCreateCard();
  console.log(formik.values);
  return (
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
          <CreateCardErrorMessage>{formik.errors.name}</CreateCardErrorMessage>
        ) : null}
      </CreateCardFieldWrapper>

      <CreateCardLabel htmlFor="year">Enter year</CreateCardLabel>
      <CreateCardFieldWrapper>
        <CreateCardField
          id="year"
          name="year"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.year}
          isValid={!(formik.errors.year && formik.touched.year)}
        />
        {formik.errors.year && formik.touched.year ? (
          <CreateCardErrorMessage>{formik.errors.year}</CreateCardErrorMessage>
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

      <CreateCardButton type="submit">Submit</CreateCardButton>
    </CreateCardForm>
  );
}
