import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Login from "../pages/Auth/Login/Login";
import Registration from "../pages/Auth/Registration/Registration";
import Home from "../pages/Home/Home";
import Error from "../components/Error/Error";
import Catagory from "../pages/Home/Catagory";
import CatagoryNews from "../pages/Home/CatagoryNews";
import AuthLayout from "../pages/Auth/AuthLayout/AuthLayout";

// Loader function to fetch news data
const newsLoader = async () => {
  const response = await fetch("/data/news.json");
  if (!response.ok) {
    throw new Response("Failed to load news data", { status: 500 });
  }
  return response.json();
};

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
        path: "category/:id",
        Component: CatagoryNews,
        loader: newsLoader,
      }
    ]
  },
  {
    path: "/home",
    Component: Root,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "category/:id",
        Component: CatagoryNews,
        loader: newsLoader,
      }
    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path:"/auth/login",
        Component: Login,
      },
      {
        path:"/auth/register",
        Component: Registration,
      }
    ]
  },
  {
    path: "/*",
    Component: Error,
  },
]);
