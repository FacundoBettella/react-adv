import { LazyExoticComponent, lazy, FC } from "react";

import { FormikBasic } from "../03-forms/pages/FormikBasic";
import { FormikYup } from "../03-forms/pages/FormikYup";
import { FormikComponents } from "../03-forms/pages/FormikComponents";
import { FormikAbstraction } from "../03-forms/pages/FormikAbstraction";
import RegisterFormik from "../03-forms/pages/RegisterFormik";
import DynamicForm from "../03-forms/pages/DynamicForm";


const lazyRegister = lazy(
  () => import(/*  webpackChunkName: "LazyUsers" */ "../03-forms/pages/Register")
);

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent> | FC;
  name: string;
}

export const routes: Route[] = [
  {
    to: "/register",
    path: "register",
    Component: lazyRegister,
    name: "Register",
  },
  {
    to: "/register-formik",
    path: "register-formik",
    Component: RegisterFormik,
    name: "Register Formik",
  },
  {
    to: "/formik-basic",
    path: "formik-basic",
    Component: FormikBasic,
    name: "Formik Basic",
  },
  {
    to: "/formik-yup",
    path: "formik-yup",
    Component: FormikYup,
    name: "Formik Yup",
  },
  {
    to: "/formik-components",
    path: "formik-components",
    Component: FormikComponents,
    name: "Formik Components",
  },
  {
    to: "/formik-abstraction",
    path: "formik-abstraction",
    Component: FormikAbstraction,
    name: "Formik Abstraction",
  },
  {
    to: "/dynamic-form",
    path: "dynamic-form",
    Component: DynamicForm,
    name: "Dynamic Form",
  },
];
