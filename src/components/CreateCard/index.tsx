import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  CreateCardButton,
  CreateCardErrorMessage,
  CreateCardField,
  CreateCardFieldWrapper,
  CreateCardForm,
  CreateCardLabel,
} from '@/components/CreateCard/index.styles';

const SignupSchema = Yup.object().shape({
  website: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!'
    )
    .required('Please enter website'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^[A-Za-z0-9 ]*$/, 'Please enter valid name')
    .required('Enter correct name!'),
  year: Yup.string()
    .min(4, 'Too Short!')
    .max(4, 'Too Long!')
    .matches(/^[0-9 ]*$/, 'Please enter valid year')
    .required('Enter correct year!'),
  country: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Enter correct name!'),
});

export function CreateCard() {
  return (
    <div>
      <Formik
        initialValues={{
          website: '',
          name: '',
          year: '',
          country: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <CreateCardForm>
            <CreateCardLabel htmlFor="url">Enter image url </CreateCardLabel>
            <CreateCardFieldWrapper>
              <CreateCardField id="url" name="website" />
              {errors.website && touched.website ? (
                <CreateCardErrorMessage>
                  {errors.website}
                </CreateCardErrorMessage>
              ) : null}
            </CreateCardFieldWrapper>

            <CreateCardLabel htmlFor="name">Enter Name</CreateCardLabel>
            <CreateCardFieldWrapper>
              <CreateCardField id="name" name="name" />
              {errors.name && touched.name ? (
                <CreateCardErrorMessage>{errors.name}</CreateCardErrorMessage>
              ) : null}
            </CreateCardFieldWrapper>

            <CreateCardLabel htmlFor="year">Enter year</CreateCardLabel>
            <CreateCardFieldWrapper>
              <CreateCardField id="year" name="year" />
              {errors.year && touched.year ? (
                <CreateCardErrorMessage>{errors.year}</CreateCardErrorMessage>
              ) : null}
            </CreateCardFieldWrapper>

            <CreateCardLabel htmlFor="country">Enter country</CreateCardLabel>
            <CreateCardFieldWrapper>
              <CreateCardField id="country" name="country" />
              {errors.country && touched.country ? (
                <CreateCardErrorMessage>
                  {errors.country}
                </CreateCardErrorMessage>
              ) : null}
            </CreateCardFieldWrapper>

            <CreateCardButton type="submit">Submit</CreateCardButton>
          </CreateCardForm>
        )}
      </Formik>
    </div>
  );
}
