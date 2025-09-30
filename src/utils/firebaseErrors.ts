import { FirebaseError } from "firebase/app";

export const getFirebaseErrorMessage = (error: FirebaseError): string => {
  const errorCodes: Record<string, string> = {
    "auth/email-already-in-use": "Этот email уже используется",
    "auth/invalid-email": "Неверный формат email",
    "auth/weak-password": "Пароль должен содержать минимум 6 символов",
    "auth/network-request-failed": "Проблемы с сетью. Проверьте подключение",
    "auth/user-not-found": "Пользователь не найден",
    "auth/wrong-password": "Неверный пароль",
    "auth/too-many-requests": "Слишком много попыток. Попробуйте позже",
    "auth/operation-not-allowed": "Этот метод авторизации отключен",
    "auth/invalid-credential": "Неверный логин или пароль",
  };

  return errorCodes[error.code] || "Произошла неизвестная ошибка";
};
