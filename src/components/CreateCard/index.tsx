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

export function CreateCard() {
  const form = useCreateCard();

  return (
    <CreateCardForm onSubmit={form.formik.handleSubmit}>
      <CreateCardLabel htmlFor="imgSrc">Enter image url </CreateCardLabel>
      <CreateCardFieldWrapper>
        <CreateCardField
          id="imgSrc"
          name="imgSrc"
          type="text"
          onChange={form.formik.handleChange}
          onBlur={form.formik.handleBlur}
          value={form.formik.values.imgSrc}
          isValid={!(form.formik.errors.imgSrc && form.formik.touched.imgSrc)}
        />
        {form.formik.errors.imgSrc && form.formik.touched.imgSrc ? (
          <CreateCardErrorMessage>
            {form.formik.errors.imgSrc}
          </CreateCardErrorMessage>
        ) : null}
      </CreateCardFieldWrapper>

      <CreateCardLabel htmlFor="name">Enter Name</CreateCardLabel>
      <CreateCardFieldWrapper>
        <CreateCardField
          id="name"
          name="name"
          type="text"
          onChange={form.formik.handleChange}
          onBlur={form.formik.handleBlur}
          value={form.formik.values.name}
          isValid={!(form.formik.errors.name && form.formik.touched.name)}
        />
        {form.formik.errors.name && form.formik.touched.name ? (
          <CreateCardErrorMessage>
            {form.formik.errors.name}
          </CreateCardErrorMessage>
        ) : null}
      </CreateCardFieldWrapper>

      <CreateCardLabel htmlFor="year">Enter year</CreateCardLabel>
      <CreateCardFieldWrapper>
        <CreateCardField
          id="year"
          name="year"
          type="text"
          onChange={form.formik.handleChange}
          onBlur={form.formik.handleBlur}
          value={form.formik.values.year}
          isValid={!(form.formik.errors.year && form.formik.touched.year)}
        />
        {form.formik.errors.year && form.formik.touched.year ? (
          <CreateCardErrorMessage>
            {form.formik.errors.year}
          </CreateCardErrorMessage>
        ) : null}
      </CreateCardFieldWrapper>

      <CreateCardLabel htmlFor="country">Enter country</CreateCardLabel>
      <CreateCardFieldWrapper>
        <CreateCardField
          id="country"
          name="country"
          type="text"
          onChange={form.formik.handleChange}
          onBlur={form.formik.handleBlur}
          value={form.formik.values.country}
          isValid={!(form.formik.errors.country && form.formik.touched.country)}
        />
        {form.formik.errors.country && form.formik.touched.country ? (
          <CreateCardErrorMessage>
            {form.formik.errors.country}
          </CreateCardErrorMessage>
        ) : null}
      </CreateCardFieldWrapper>

      <CreateCardButton type="submit">Submit</CreateCardButton>
    </CreateCardForm>
  );
}
