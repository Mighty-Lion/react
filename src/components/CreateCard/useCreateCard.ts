import * as Yup from 'yup';
import { useFormik } from 'formik';

export const CreateCardValidateSchema = Yup.object().shape({
  imgSrc: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!'
    )
    .required('Введите корректный url изображения.'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^[A-Za-z0-9 ]*$/, 'Please enter valid name')
    .required('Enter correct name!'),
  year: Yup.number()
    .min(1883, 'Первый автомобиль появился в 1883 году.')
    .max(2023, 'Нельзя указывать авто выше 2023 года.')
    .required('Введите корректный год!'),
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
      year: '1883',
      country: '',
    },
    validationSchema: CreateCardValidateSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return { formik };
}
