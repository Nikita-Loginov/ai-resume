import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/Input/Input";
import { ButtonLink } from "@/components/ui/ButtonLink/ButtonLink";

import { EMAIL_CONFIG, PASSWORD_CONFIG } from "@/constants/validation";

import { Icons } from "@/assets/icons";

import type { IForm } from "../../types";

import { rc } from "@/utils/rc";

import css from "./Form.module.css";

type FormProps = {
  mode: "login" | "register";
  onSubmit?: (data: IForm) => void;
  onGoogleSignIn?: () => void;
  errorSubmit?: string;
  isLoadingSubmit?: boolean;
};

export const Form: React.FC<FormProps> = ({
  mode,
  onSubmit,
  onGoogleSignIn,
  errorSubmit,
  isLoadingSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IForm>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSumbitForm = (data: IForm) => {
    if (!isValid || isLoadingSubmit) return;

    onSubmit?.(data);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSumbitForm)}>
      <div className={rc([css.inner, errorSubmit ? css.error : ""])}>
        <div className={css.inputs}>
          <Input
            head="Ваш email"
            placeholder="Введите ваш email"
            type="email"
            error={errors.email?.message}
            disabled={isLoadingSubmit}
            {...register("email", EMAIL_CONFIG)}
          />

          <Input
            head="Ваш пароль"
            placeholder="Введите ваш пароль"
            type="password"
            error={errors.password?.message}
            disabled={isLoadingSubmit}
            {...register("password", PASSWORD_CONFIG)}
          />
        </div>

        <footer className={css.footer}>
          <ButtonLink
            type="submit"
            text={
              isLoadingSubmit
                ? "Проверяем..."
                : mode === "login"
                ? "Зайти"
                : "Зарегистрироваться"
            }
            disabled={!isValid || isLoadingSubmit}
          />

          <ButtonLink
            type="button"
            text={
              isLoadingSubmit ? "Вход через Google..." : "Продолжить с Google"
            }
            variant="secondary"
            onClick={onGoogleSignIn}
            disabled={isLoadingSubmit}
            iconLeft={<Icons.GoogleIcon />}
          />

          {errorSubmit && (
            <p className="p2" style={{ color: "var(--red-100-color)" }}>
              {errorSubmit}
            </p>
          )}
        </footer>
      </div>
    </form>
  );
};
