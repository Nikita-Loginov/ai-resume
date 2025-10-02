import { useSelector } from "react-redux";

import type { RootState } from "@/store";

import { TopInfo } from "@/components/shared/TopInfo/TopInfo";
import { Container } from "@/components/widget/Container/Container";
import { ResumeCard } from "@/components/shared/ResumeCard/ResumeCard";
import { Empty } from "@/components/shared/Empty/Empty";

import { rc } from "@/utils/rc";

import css from "./Home.module.css";

export const Home = () => {
  const { items: resumeItems } = useSelector(
    (state: RootState) => state.resume
  );

  return (
    <section className={css.page}>
      <Container>
        <div className={css.inner}>
          <TopInfo
            title="Отслеживайте рейтинги своих резюме"
            text="Просматривайте ваши резюме и проверяйте обратную связь с помощью искусственного интеллекта."
          />

          <div className={css.box}>
            {resumeItems.length ? (
              <div className={rc([css.items, "animation-transform"])}>
                {resumeItems.map((item) => (
                  <ResumeCard item={item} key={item.id} />
                ))}
              </div>
            ) : (
              <Empty
                title="У вас пока что нет резюме 😔"
                linkText="Создать резюме"
                to="/upload"
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
