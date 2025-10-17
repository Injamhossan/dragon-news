import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Login from "../layouts/Login/Login";
import Registration from "../layouts/Registration/Registration";
import Home from "../pages/Home/Home";
import Error from "../components/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index:true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Registration,
      },
      {
        path: "/*",
        Component: Error,
      }
    ],
  },
]);
