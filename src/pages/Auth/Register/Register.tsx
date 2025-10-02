import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";

import { authFunctions } from "../utils/authFunctions";

import { useDispatch } from "react-redux";

import { setUser } from "@/store/slices/userSlice";

import { TopInfo } from "@/components/shared/TopInfo/TopInfo";
import { BottomInfo } from "../parts/BottomInfo/BottomInfo";
import { Form } from "../parts/Form/Form";

import { getFirebaseErrorMessage } from "@/utils/firebaseErrors";

import type { IForm } from "../types";

export const Register = () => {
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

      await createUserWithEmailAndPassword(auth, data.email, data.password);

      await signOut(auth);

      navigation("/auth/login");
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
        text="Зарегистрируйтесь, чтобы продолжить свою работу"
      />

      <Form
        mode="register"
        onSubmit={onSubmit}
        onGoogleSignIn={handleGoogleSignIn}
        errorSubmit={statusError}
        isLoadingSubmit={isLoading || isGoogleLoading}
      />

      <BottomInfo text="Есть аккаунт?" link="Зайти" to="/auth/login" />
    </>
  );
};
