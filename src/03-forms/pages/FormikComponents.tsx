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
        })}
      >
        {
            (formik) => (
                <Form>
                    <label htmlFor='firstName'>First name</label>
                    <Field name="firstName" type="text" />
                    <ErrorMessage name="firstName" component="span"/>

                    <label htmlFor='lastName'>Last name</label>
                    <Field name="lastName" type="text" />
                    <ErrorMessage name="lastName"  component="span"/>

                    <label htmlFor='email'>Email Address</label>
                    <Field name="email" type="text" />
                    <ErrorMessage name="email"  component="span"/>

                    <button type='submit'>Submit</button>
                </Form>
            )
        }
      </Formik>
    </div>
  );
};
