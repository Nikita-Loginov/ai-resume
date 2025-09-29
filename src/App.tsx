import { RouterProvider } from "react-router-dom";
import router from "./routes";

import type { IUser } from "./types";

export const App = () => {
  const user: IUser = {
    id: 1,
  };

  return <RouterProvider router={router(user)} />;
};
