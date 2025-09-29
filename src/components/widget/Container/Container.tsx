import css from "./Container.module.css";

type IContainer = {
  children: React.ReactNode;
};

export const Container: React.FC<IContainer> = ({ children }) => {
  return <div className={css.box}>{children}</div>;
};
