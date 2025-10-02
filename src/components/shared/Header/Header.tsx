import { useEffect, useRef } from "react";

import { Container } from "../../widget/Container/Container";
import { Logo } from "../../widget/Logo/Logo";
import { ButtonLink } from "../../ui/ButtonLink/ButtonLink";

import { setVarRoot } from "@/utils/setVarRoot";

import css from "./Header.module.css";

export const Header = () => {
  const headerRef = useRef<null | HTMLElement>(null);

  useEffect(() => {
    const setHeaderHeightRoot = () => {
      if (!headerRef.current) return;

      setVarRoot(headerRef.current, "height", "--header-height");
    };

    setHeaderHeightRoot();

    window.addEventListener("resize", setHeaderHeightRoot);

    return () => {
      window.removeEventListener("resize", setHeaderHeightRoot);
    };
  }, []);
  return (
    <header className={css.header} ref={headerRef}>
      <Container>
        <div className={css.inner}>
          <Logo />

          <ButtonLink text="Загрузить резюме" to="/upload" />
        </div>
      </Container>
    </header>
  );
};
