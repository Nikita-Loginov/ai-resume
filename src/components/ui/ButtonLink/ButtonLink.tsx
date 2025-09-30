import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";

import { rc } from "@/utils/rc";

import css from "./ButtonLink.module.css";

interface ButtonLinkProps {
  to?: string;
  onClick?: () => void;
  size?: "large" | "big";
  text: string;
  variant?: "primary" | "secondary";
  type?: "button" | "reset" | "submit";
  iconLeft?: ReactNode;
  disabled?: boolean;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  to,
  onClick,
  text,
  size = "big",
  variant = "primary",
  iconLeft,
  ...props
}) => {
  const buttonStyles = {
    color: variant === "primary" ? "var(--white-color)" : "var(--black-color)",
    backgroundImage:
      variant === "primary" ? "var(--blueviolet-gradient)" : "none",
    borderRadius: "var(--border-radius-big)",
    fontSize: "20px",
    padding: size === "big" ? "10px 24px" : "10px",
    minHeight: size === "big" ? "50px" : "40px",
    fontFamily: "var(--main-font)",
    textDecoration: "none",
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: '10px',
    border: variant === "primary" ? "none" : "1px solid var(--black-color)",
    " &.Mui-disabled": {
      color: "var(--white-color)",
    },
  };

  if (to) {
    return (
      <Button component={Link} to={to} sx={buttonStyles} {...props}>
        {iconLeft && <span className={rc([css.icon, "icon"])}>{iconLeft}</span>}

        {text}
      </Button>
    );
  }

  return (
    <Button
      className={rc([css.box, props.disabled ? css.disabled : "", variant === 'secondary' ? css.secondary : ''])}
      onClick={onClick}
      sx={buttonStyles}
      {...props}
    >
      {iconLeft && <span className={rc([css.icon, "icon"])}>{iconLeft}</span>}

      {text}
    </Button>
  );
};
