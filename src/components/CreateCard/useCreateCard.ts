import * as Yup from 'yup';
import { useFormik } from 'formik';
import exp from 'constants';

export const SignupSchema = Yup.object().shape({
  imgSrc: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!'
    )
    .required('Please enter image URL'),
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
    .matches(/^[A-Za-z ]*$/, 'Please enter valid country')
    .required('Enter correct name!'),
});

export function useCreateCard() {
  const formik = useFormik({
    initialValues: {
      imgSrc: '',
      name: '',
      year: '',
      country: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return { formik };
}
