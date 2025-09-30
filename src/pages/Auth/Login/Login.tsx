import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { FirebaseError } from "firebase/app";

import { authFunctions } from "../utils/authFunctions";

import { useDispatch } from "react-redux";

import { setUser } from "@/store/slices/userSlice";

import { getFirebaseErrorMessage } from "@/utils/firebaseErrors";

import type { IForm } from "../types";

import { TopInfo } from "@/components/shared/TopInfo/TopInfo";
import { Form } from "../parts/Form/Form";
import type { IUser } from "@/types";

export const Login = () => {
  const [statusError, setStatusError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data: IForm) => {
    setIsLoading(true);
    setStatusError("");

    try {
      const auth = getAuth();

      const result = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const token = await result.user.getIdToken();

      const user: IUser = {
        id: result.user.uid,
        email: result.user.email,
        token: token,
        name: result.user.displayName,
      };

      dispatch(setUser(user));

      navigation("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorMessage = getFirebaseErrorMessage(error);

        setStatusError(errorMessage);

        console.error("Firebase ошибка:", error.code, error.message);
      } else {
        setStatusError("Неизвестная ошибка");

        console.error("Неизвестная ошибка:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    setStatusError("");

    const { user, error } = await authFunctions.signInWithGoogle();

    if (user) {
      dispatch(setUser(user));
      navigation("/");
    } else if (error) {
      setStatusError(error);
    }

    setIsGoogleLoading(false);
  };

  return (
    <>
      <TopInfo
        title="Добро пожаловать"
        text="Войдите, чтобы продолжить свою работу"
      />

      <Form
        mode="login"
        onSubmit={onSubmit}
        onGoogleSignIn={handleGoogleSignIn}
        errorSubmit={statusError}
        isLoadingSubmit={isLoading || isGoogleLoading}
      />
    </>
  );
};
