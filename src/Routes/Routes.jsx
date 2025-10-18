import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Login from "../pages/Auth/Login/Login";
import Registration from "../pages/Auth/Registration/Registration";
import Home from "../pages/Home/Home";
import Error from "../components/Error/Error";
import Catagory from "../pages/Home/Catagory";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        path: "",
        Component: Home,
      },
      {
        path: "/catagory/:id",
        Component: Catagory,
      }
    ]
  },
  {
    path: "/home",
    Component: Home
  },
  {
    path: "/auth",
    Component: Root,
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
  },
]);
