import { Link } from "react-router-dom";

import { Button } from "@mui/material";

interface ButtonLinkProps {
  to?: string;
  onClick?: () => void;
  size?: "large" | "big";
  text: string;
  variant?: "primary" | "secondary";
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  to,
  onClick,
  text,
  size = "big",
  variant = "primary",
  ...props
}) => {
  const buttonStyles = {
    color: "var(--white-color)",
    backgroundImage:
      variant === "primary"
        ? "var(--blueviolet-gradient)"
        : "var(--main-gradient)",
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
  };

  if (to) {
    return (
      <Button component={Link} to={to} sx={buttonStyles} {...props}>
        {text}
      </Button>
    );
  }

  return (
    <Button onClick={onClick} sx={buttonStyles} {...props}>
      {text}
    </Button>
  );
};
