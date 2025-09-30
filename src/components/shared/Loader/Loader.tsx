import css from "./Loader.module.css";

interface LoaderProps {
  text?: string;
}

export const Loader: React.FC<LoaderProps> = ({ text }) => {
  return (
    <div className={css.box}>
      <div className={css.icon}></div>

      {text && <p className="p2">{text}</p>}
    </div>
  );
};
