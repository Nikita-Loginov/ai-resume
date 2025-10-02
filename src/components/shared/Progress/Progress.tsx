import { rc } from "@/utils/rc";

import css from "./Progress.module.css";

type ProgressProps = {
  progress: string;
};

export const Progress: React.FC<ProgressProps> = ({ progress }) => {
  const radius = 48;
  const circumference = 2 * Math.PI * radius; 

  const progressPercentage = Math.min(Math.max(Number(progress), 0), 100) / 100; 
  const offset = circumference - circumference * progressPercentage;

  console.log(offset)

  return (
    <span className={css.box}>
      <svg
        viewBox="-14.5 -14.5 145 145"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          r="48"
          cx="58"
          cy="58"
          fill="transparent"
          stroke="var(--gray-color-200)"
          stroke-width="9"
        ></circle>
        <circle
          r="48"
          cx="58"
          cy="58"
          stroke="var(--blueviolet-color)"
          stroke-width="9"
          stroke-linecap="round"
          stroke-dashoffset={offset}
          fill="transparent"
          stroke-dasharray="301.44px"
        ></circle>
      </svg>

      <p className={rc([css.precent])}>  {progress}/100</p>
    </span>
  );
};
