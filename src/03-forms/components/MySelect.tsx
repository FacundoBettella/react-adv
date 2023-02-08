import { ErrorMessage, useField } from "formik";
import { FC } from "react";

interface IProps {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export const MySelect: FC<IProps> = ({ label, ...props }) => {
  const [ field ] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component='span' />

      {/* {meta.touched && meta.error && <span> {meta.error} </span>} */}
    </>
  );
};
