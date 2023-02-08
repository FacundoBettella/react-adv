import { FC } from "react";
import { useForm } from "../hooks/useForm";

import "../styles/styles.css";

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

const Register: FC = () => {
  const {
    name,
    email,
    password1,
    password2,
    onChange,
    onSubmit,
    resetForm,
    isValidEmail,
  } = useForm<IForm>(initialState);

  return (
    <div>
      <h1>Custom form with hook implementation</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          value={name}
          name='name'
          onChange={onChange}
          type='text'
          placeholder='Name'
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>This field is required</span>}

        <input
          value={email}
          name='email'
          onChange={onChange}
          type='text'
          placeholder='Email'
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>This email is not valid</span>}

        <input
          value={password1}
          name='password1'
          onChange={onChange}
          type='password'
          placeholder='Password'
        />
        {password1.trim().length <= 0 && <span>This field is required</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>This field must have at least 6 characters</span>
        )}

        <input
          value={password2}
          name='password2'
          onChange={onChange}
          type='password'
          placeholder='Repeat password'
        />
        {password2.trim().length <= 0 && <span>This field is required</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>The passwords are not the same</span>
        )}

        <button type='submit'>Create</button>
        <button type='button' onClick={resetForm}>
          Reset form
        </button>
      </form>
    </div>
  );
};
export  default Register;