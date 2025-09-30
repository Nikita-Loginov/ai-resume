import { createBrowserRouter, Navigate } from "react-router-dom";

import Template from "../pages/Template/Template";
import { AuthTemplate } from "@/pages/Auth/Template/AuthTemplate";
import { Login } from "@/pages/Auth/Login/Login";
import { Register } from "@/pages/Auth/Register/Register";

import type { IUser } from "../types";

export const getRoutes = (user: IUser | null) => {
  const isLoggedIn = !!user?.id;

  return [
    {
      path: "/",
      element: isLoggedIn ? <Template /> : <Navigate to="/auth/login" replace />,
      children: [
        {
          index: true,
          element: <p>Это главная</p>,
        },
        {
          path: "/about",
          element: <p>Это about</p>,
        },
      ],
    },
    {
      path: "/auth",
      element: !isLoggedIn ? <AuthTemplate /> : <Navigate to="/" replace />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        { path: "", element: <Navigate to="/auth/login" replace /> },
      ],
    },
    {
      path: "*",
      element: <p>Ошибка 404</p>,
    },
  ];
};

const createRouter = (user: IUser | null) => {
  return createBrowserRouter(getRoutes(user));
};

export default createRouter;