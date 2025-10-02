import { Link } from "react-router-dom";

import { rc } from "@/utils/rc";

import css from "./BottomInfo.module.css";

type BottomInfoProps = {
  text: string;
  link: string;
  to: string;
};

export const BottomInfo: React.FC<BottomInfoProps> = ({ text, link, to }) => {
  return (
    <p className={rc(["p2", css.text])}>
      {text}
      <Link className={css.link} to={to}>
        {link}
      </Link>
    </p>
  );
};
