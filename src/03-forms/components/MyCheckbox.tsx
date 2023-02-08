import { useField } from "formik";
import { FC } from "react";

interface IProps {
  label: string;
  name: string;
  [x: string]: any;
}

export const MyCheckbox: FC<IProps> = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label>
        <input {...field} {...props} type='checkbox' />
        {label}
      </label>

      {meta.touched && meta.error && <span> {meta.error} </span>}
    </>
  );
};
