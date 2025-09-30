import { RouterProvider } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.ts";

import type { RootState } from "./store/index.ts";

import { Loader } from "./components/shared/Loader/Loader.tsx";

import { setUser, clearAuth, setLoading } from "@/store/slices/userSlice";
import createRouter from "./routes";

export const App = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state: RootState) => state.user);
  const [router, setRouter] = useState(() => createRouter(user));

  useEffect(() => {
    dispatch(setLoading(true));


    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const token = await firebaseUser.getIdToken();

        const userData = {
          id: firebaseUser.uid,
          email: firebaseUser.email,
          token: token,
          name: firebaseUser.displayName,
        };

        dispatch(setUser(userData));
      } else {
        dispatch(clearAuth());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    setRouter(createRouter(user));
  }, [user]);

  if (isLoading) {
    return (
      <div style={{ height: "100vh" }}>
        <Loader text="Проверяем авторизацию..." />
      </div>
    );
  }

  return <RouterProvider router={router} />;
};
