import { createBrowserRouter, Navigate } from "react-router-dom";
import Template from "../pages/Template/Template";

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
  ]);
};

export default router;
