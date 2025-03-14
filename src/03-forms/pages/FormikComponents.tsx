import { FC } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const FormikComponents: FC = () => {
  return (
    <div>
      <h1> Formik Components </h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener menos de 16 caracteres")
            .required("Requerido"),

          lastName: Yup.string()
            .max(15, "Debe de tener menos de 16 caracteres")
            .required("Requerido"),

          email: Yup.string()
            .email("El correo no tiene un formato valido")
            .required("Requerido"),

          terms: Yup.boolean()
            .oneOf([true], "Debe aceptar las condiciones"),

          jobType:  Yup.string()
            .required("Requerido")
            .notOneOf(["it-jr"], "Esta opción no está permitida")   
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor='firstName'>First name</label>
            <Field name='firstName' type='text' />
            <ErrorMessage name='firstName' component='span' />

            <label htmlFor='lastName'>Last name</label>
            <Field name='lastName' type='text' />
            <ErrorMessage name='lastName' component='span' />

            <label htmlFor='email'>Email Address</label>
            <Field name='email' type='text' />
            <ErrorMessage name='email' component='span' />

            <label htmlFor='jobType'>Job type</label>
            <Field name='jobType' as='select'>
              <option value=''>Pick something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-jr'>IT Jr</option>
            </Field>
            <ErrorMessage name='jobType' component='span' />

            <label>
              <Field name='terms' type='checkbox' />
              Terms and conditions
            </label>
            <ErrorMessage name='terms' component='span' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
