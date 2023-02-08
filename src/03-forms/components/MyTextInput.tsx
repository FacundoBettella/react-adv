import { ErrorMessage, useField } from "formik";
import { FC } from "react";

interface IProps {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}

export const MyTextInput: FC<IProps> = ({ label, ...props }) => {
  const [field] = useField(props);

  //console.log(meta)

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      <ErrorMessage name={props.name} component='span' />

      {/* {meta.touched && meta.error && <span> {meta.error} </span>} */}
    </>
  );
};
