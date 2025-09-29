import { Input } from "@/components/ui/Input/Input";
import { ButtonLink } from "@/components/ui/ButtonLink/ButtonLink";

import css from "./Form.module.css";

export const Form = () => {
  return (
    <form className={css.form}>
      <div className={css.inner}>
        <div className={css.inputs}>
          <Input
            head="Ваш email"
            placeholder="Введите ваш email"
            type="email"
          />

          <Input
            head="Ваш пароль"
            placeholder="Введите ваш пароль"
            type="password"
          />
        </div>

        <footer className={css.footer}>
          <ButtonLink type="submit" text="Зайти" />
        </footer>
      </div>
    </form>
  );
};
