import "../styles/styles.css";
import { FC } from "react";
import { useFormik } from "formik";

export const FormikBasic: FC = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1> Formik Basic Tutorial</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First name</label>
        <input
          type='text'
          name='firstName'
          value={values.firstName}
          onChange={handleChange}
        />

        <label htmlFor='lastName'>Last name</label>
        <input
          type='text'
          name='lastName'
          value={values.lastName}
          onChange={handleChange}
        />

        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
          name='email'
          value={values.email}
          onChange={handleChange}
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
