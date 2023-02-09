import "../styles/styles.css";

import { FC } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

interface IForm {
  name: string;
  email: string;
  password1: string;
  password2: string;
  terms?: boolean;
}

const initialState: IForm = {
  name: "",
  email: "",
  password1: "",
  password2: "",
};

const validation = Yup.object({
  name: Yup.string()
    .min(2, "Debe tener al menos 2 caracteres")
    .max(15, "Debe de tener un maximo de 15 caracteres")
    .required("Requerido"),

  email: Yup.string()
    .email("El correo no tiene un formato valido")
    .required("Requerido"),

  password1: Yup.string()
    .min(6, "Debe tener al menos 6 caracteres")
    .required("requerido"),

  password2: Yup.string()
    .min(6, "Debe tener al menos 6 caracteres")
    .oneOf([Yup.ref("password1")], "Las contraseñas no son iguales")
    .required("requerido"),
});

const RegisterFormik: FC = () => {
  return (
    <div>
      <h1>Formik Register</h1>

      <Formik
        initialValues={initialState}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validation}
      >
        {({ resetForm }) => (
          <Form>
            <MyTextInput 
                label='Name' 
                name='name' 
                placeholder='Jonas' 
            />
            <MyTextInput
              label='Email'
              name='email'
              placeholder='jonas@gmail.com'
            />
            <MyTextInput
              label='Password'
              name='password1'
              type='password'
              placeholder='*******'
            />
            <MyTextInput
              label='Repeat password'
              name='password2'
              type='password'
              placeholder='*******'
            />
            <button type='submit'>Submit</button>
            <button type='submit' onClick={() => resetForm()}>
              Reset form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default RegisterFormik;
