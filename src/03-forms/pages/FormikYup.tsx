import { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const FormikYup: FC = () => {
  const {
    handleSubmit,
    errors,
    touched,
    getFieldProps /* Contiene onChange, onBlur y value, recibe por params el nombre del campo */,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Debe de tener menos de 16 caracteres")
        .required("Requerido"),

      lastName: Yup.string()
        .max(15, "Debe de tener menos de 16 caracteres")
        .required("Requerido"),

      email: Yup.string()
        .email("El correo no tiene un formato valido")
        .required("Requerido"),
    }),
  });

  return (
    <div>
      <h1> Formik Yup </h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First name</label>
        <input type='text' {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (<span>{errors.firstName}</span>)}

        <label htmlFor='lastName'>Last name</label>
        <input type='text' {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor='email'>Email Address</label>
        <input type='email' {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
