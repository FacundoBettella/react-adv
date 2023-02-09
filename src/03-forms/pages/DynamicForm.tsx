import { FC } from "react";

import { Formik, Form } from "formik";
// import * as Yup from "yup";
import { MySelect, MyTextInput } from "../components";

import formJson from "../data/custom-form.json";
import "../styles/styles.css";

let initialValues: { [key: string]: any } = {};

const DynamicForm: FC = () => {
  for (const input of formJson) {
    initialValues[input.name] = input.value;
  }

  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        // validationSchema={{}}
      >
        {(formik) => (
          <Form noValidate>
            {
                formJson.map(
                ({ label, name, placerholder, type, value, options }, index) => {
                    if (
                    type === "input" ||
                    type === "password" ||
                    type === "email"
                    ) {
                    return (
                        <MyTextInput
                        type={type as any}
                        label={label}
                        name={name}
                        placeholder={placerholder}
                        key={index}
                        />
                    );
                    } else if (type === "select") {
                    return (
                        <MySelect name={name} label={label} key={index}>
                            <option value=""> Select an option</option>       
                            {
                                options?.map(({ id, description }) => (
                                    <option value={id} key={id}>
                                        {description}
                                    </option>
                                ))
                            }
                        </MySelect>
                    );
                    }
                    return <span> input type: <em>{type}</em> no soportado</span>;
                }
                )
            }

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default DynamicForm;
