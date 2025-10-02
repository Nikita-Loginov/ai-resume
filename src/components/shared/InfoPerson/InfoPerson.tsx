import { rc } from "@/utils/rc";

import css from "./InfoPerson.module.css";

type InfoPersonProps = {
  company: string;
  special: string;
};

export const InfoPerson: React.FC<InfoPersonProps> = ({ company, special }) => {
  if (!company || !special) return null;

  return (
    <div className={css.box}>
      {company && <p className={rc(["p1", css.head])}>{company}</p>}

      {special && <p className={rc(["p2", css.text])}>{special}</p>}
    </div>
  );
};
