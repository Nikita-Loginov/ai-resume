import { rc } from "@/utils/rc";

import css from "./ImgDecor.module.css";

type ImgDecorProps = {
  className?: string;
  imgSrc: string;
  alt?: string;
};

export const ImgDecor: React.FC<ImgDecorProps> = ({
  className,
  imgSrc,
  alt,
}) => {
  return (
    <span className={rc([className, css.box])}>
      <img src={imgSrc} alt={alt || "фотография"} />
    </span>
  );
};
