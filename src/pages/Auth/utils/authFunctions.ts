import { FirebaseError } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import type { IUser } from "@/types";

import { getFirebaseErrorMessage } from "@/utils/firebaseErrors";

const googleProvider = new GoogleAuthProvider();

export const authFunctions = {
  signInWithGoogle: async (): Promise<{
    user: IUser;
    error: string | null;
  }> => {
    try {
      const auth = getAuth();
      const result = await signInWithPopup(auth, googleProvider);

      const token = await result.user.getIdToken();

      const user: IUser = {
        id: result.user.uid,
        email: result.user.email,
        token: token,
        name: result.user.displayName,
      };

      return { user, error: null };
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorMessage = getFirebaseErrorMessage(error);

        return { user: null, error: errorMessage };
      } else {
        return {
          user: null,
          error: "Неизвестная ошибка при входе через Google",
        };
      }
    }
  },
};
