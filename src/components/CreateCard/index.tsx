import {Formik, Field, Form, validateYupSchema} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export function ValidationSchemaExample() {
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export function CreateCard() {
  return (
    // {ValidationSchemaExample}
    <form action="">
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

console.log('Formik');
console.log(ValidationSchemaExample);
