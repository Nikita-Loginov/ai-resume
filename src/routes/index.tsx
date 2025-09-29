import { createBrowserRouter, Navigate } from "react-router-dom";

import Template from "../pages/Template/Template";

import { Authorization } from "../pages/Authorization/Authorization";

import type { IUser } from "../types";

const router = (user: IUser) => {
  const isLoggedIn = true;

  return createBrowserRouter([
    {
      path: "/",
      element: isLoggedIn ? <Template /> : <Navigate to="/auth" />,
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
      path: '/auth',
      element: <Authorization />
    }
  ]);
};

export default router;
