import { Container } from "../../widget/Container/Container";
import { Logo } from "../../widget/Logo/Logo";
import { ButtonLink } from "../../ui/ButtonLink/ButtonLink";

import css from "./Header.module.css";

export const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.inner}>
          <Logo />

          <ButtonLink text="Загрузить резюме" to="/upload" />
        </div>
      </Container>
    </header>
  );
};
