import { LazyExoticComponent, lazy } from "react";

const lazyHome = lazy(
  () =>
    import(/*  webpackChunkName: "LazyUsers" */ "../03-forms/pages/Home")
);
const lazyAbout = lazy(
  () =>
    import(/*  webpackChunkName: "LazyAbout" */ "../03-forms/pages/About")
);

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent>;
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
    to: "/about",
    path: "about",
    Component: lazyAbout,
    name: "About",
  },
];
