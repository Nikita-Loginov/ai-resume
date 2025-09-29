import { Icons } from "../../../assets/icons";

import { rc } from "../../../utils/rc";

import css from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={css.box}>
      {/* <span className={rc([css.icon, "icon"])}>
        <Icons.ResumeIcon />
      </span> */}

      <p className={css.text}>resumind</p>
    </div>
  );
};
