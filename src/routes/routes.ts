import { LazyExoticComponent, lazy, FC } from "react";

import { Register } from "../03-forms/pages/Register";
import { FormikBasic } from "../03-forms/pages/FormixBasic";

const lazyHome = lazy(
  () => import(/*  webpackChunkName: "LazyUsers" */ "../03-forms/pages/Home")
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
    to: "/home",
    path: "home",
    Component: lazyHome,
    name: "Home",
  },
  {
    to: "/register",
    path: "register",
    Component: Register,
    name: "Register",
  },
  {
    to: "/formik-basic",
    path: "formik-basic",
    Component: FormikBasic,
    name: "Formik Basic",
  },
];
