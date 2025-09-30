import { Outlet } from "react-router-dom";

import { Container } from "@/components/widget/Container/Container";

import css from "./AuthTemplate.module.css";

export const AuthTemplate = () => {
  return (
    <div className={css.box}>
      <Container>
        <div className={css.inner}>
          <Outlet />
        </div>
      </Container>
    </div>
  );
};
