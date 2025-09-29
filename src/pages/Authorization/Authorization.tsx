import { TopInfo } from "@/components/shared/TopInfo/TopInfo";
import { Container } from "@/components/widget/Container/Container";
import { Form } from "./parts/Form/Form";

import css from "./Authorization.module.css";

export const Authorization = () => {
  return (
    <div className={css.box}>
      <Container>
        <div className={css.inner}>
          <TopInfo
            title="Добро пожаловать"
            text="Войдите, чтобы продолжить свою работу"
          />

          <Form />
        </div>
      </Container>
    </div>
  );
};
