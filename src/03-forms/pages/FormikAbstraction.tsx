import "../styles/styles.css";

import { FC } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { MyCheckbox, MySelect, MyTextInput } from "../components";


export const FormikAbstraction: FC = () => {
  return (
    <div>
      <h1> Formik Abstraction </h1>

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

          terms: Yup.boolean().oneOf([true], "Debe aceptar las condiciones"),

          jobType: Yup.string()
            .required("Requerido")
            .notOneOf(["it-jr"], "Esta opción no está permitida"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label='First Name' name='firstName' />

            <MyTextInput label='Last Name' name='lastName' />

            <MyTextInput label='Email' name='email' />

            <MySelect name='jobType' label='Job type'>
              <option value=''>Pick something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-jr'>IT Jr</option>
            </MySelect>

            <MyCheckbox name='terms' label='Terms & conditions' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
