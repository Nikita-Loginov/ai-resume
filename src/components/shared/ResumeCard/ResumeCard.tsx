import { Link } from "react-router-dom";

import type { IResume } from "@/types";

import { InfoPerson } from "../InfoPerson/InfoPerson";
import { Progress } from "../Progress/Progress";
import { ImgDecor } from "../ImgDecor/ImgDecor";

import css from "./ResumeCard.module.css";

type ResumeCardProps = {
  item: IResume;
};

export const ResumeCard: React.FC<ResumeCardProps> = ({ item }) => {
  if (!item) return null;

  return (
    <Link to={`/resume/${item.id}`} className={css.box}>
      <header className={css.header}>
        {item.company && item.special ? (
          <InfoPerson company={item?.company} special={item?.special} />
        ) : null}

        <Progress progress={item.progress || "0"} />
      </header>

      <div className={css.content}>
        <ImgDecor imgSrc={item.img} alt={`Резюме для компании ${item.company}`} className={css['img-box']}/>
      </div>
    </Link>
  );
};
