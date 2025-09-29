import css from "./TopInfo.module.css";

interface TopInfoProps {
  title?: string;
  text?: string;
}

export const TopInfo: React.FC<TopInfoProps> = ({ title, text }) => {
  if (!title && !text) return null;

  return (
    <div className={css.box}>
      {title && <h1 className="h1">{title}</h1>}

      {text && (
        <p className="h3" style={{ color: "var(--gray-color-100)", fontWeight: 'var(--font-width-main)' }}>
          {text}
        </p>
      )}
    </div>
  );
};
