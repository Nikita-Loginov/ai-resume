import { ButtonLink } from "@/components/ui/ButtonLink/ButtonLink";

import css from "./Empty.module.css";

type EmptyProps = {
  title?: string;
  linkText?: string;
  to?: string;
};

export const Empty: React.FC<EmptyProps> = ({ title, linkText, to }) => {
  return (
    <div className={css.box}>
      <div className={css.block}>
        {title && <p className="p1">{title}</p>}

        {linkText && <ButtonLink to={to} text={linkText} />}
      </div>
    </div>
  );
};
