import { Container } from "@/components/widget/Container/Container";
import { TopInfo } from "@/components/shared/TopInfo/TopInfo";
import { Form } from "./parts/Form/Form";

import css from "./Upload.module.css";

export const Upload = () => {
  return (
    <section className={css.page}>
      <Container>
        <div className={css.inner}>
          <TopInfo
            title="Умная обратная связь для работы вашей мечты"
            text="Отправьте свое резюме, чтобы получить оценку ATS и советы по ее улучшению."
          />

          <Form />
        </div>
      </Container>
    </section>
  );
};
