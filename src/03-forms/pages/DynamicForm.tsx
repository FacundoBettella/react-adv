import { FC } from "react";

import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../components";
import * as Yup from "yup";

import formJson from "../data/custom-form.json";
import "../styles/styles.css";

let initialValues: { [key: string]: any } = {};
let requiredFields: { [key: string]: any } = {};

const DynamicForm: FC = () => {

  for (const input of formJson) {
    initialValues[input.name] = input.value;

    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
      if (rule.type === "required") {
        schema = schema.required("Este campo es requerido");
      }

      if (rule.type === "minLength") {
        schema = schema.min(
          (rule as any).value || 2,
          `Debe contener más de ${rule.value} caracteres`
        );
      }

      if (rule.type === "maxLength") {
        schema = schema.max(
          (rule as any).value || 10,
          `Debe contener menos de ${rule.value} caracteres`
        );
      }

      if (rule.type === "email") {
        schema = schema.email(`Revise el formato del correo electrónico`);
      }
    }

    requiredFields[input.name] = schema;
  }

  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({ ...requiredFields })}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(
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
                      <option value=''> Select an option</option>
                      {options?.map(({ id, description }) => (
                        <option value={id} key={id}>
                          {description}
                        </option>
                      ))}
                    </MySelect>
                  );
                }
                return (
                  <span>
                    {" "}
                    input type: <em>{type}</em> no soportado
                  </span>
                );
              }
            )}

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default DynamicForm;
