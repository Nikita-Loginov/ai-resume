import { Input as InputBox } from "@mui/material";
import { forwardRef } from "react";

import { rc } from "@/utils/rc";

import css from "./Input.module.css";
interface InputProps {
  error?: string;
  head?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  autoComplete?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, name, head, type, placeholder, value, ...props }, ref) => {
    return (
      <label className={css.box}>
        <div className={css.block}>
          {head && (
            <p style={{ color: `var(--gray-color-100)` }} className="p2">
              {head}
            </p>
          )}

          <InputBox
            sx={{
              "& .MuiInput-input": {
                padding: "10px 18px",
                fontSize: "16px",
                color: "var(--black-color)",
                backgroundColor: "transparent",
                border: error
                  ? "1px solid var(--red-100-color)"
                  : "1px solid transparent",
                borderRadius: "var(--border-radius-l)",
                backdropFilter: "blur(20px)",
                boxShadow: "0px 0px 12px 0px #2463EB33 inset",
                minHeight: "30px",
                height: "auto",
                transition: "border-color 0.2s ease",
                "&:focus": {
                  borderColor: "var(--blueviolet-color)",
                  outline: "none",
                },
                "&:hover": {
                  borderColor: "var(--blueviolet-color)",
                },
              },
              fontFamily: "Onest",
              "&:before": {
                display: "none",
              },
              "&:after": {
                display: "none",
              },
              "& .Mui-disabled" : {
                pointerEvents: "none"
              }
            }}
            inputRef={ref}
            type={type || "text"}
            name={name}
            placeholder={placeholder}
            value={value}
            {...props}
          />
        </div>

        {error && <p className={rc([css.error, "p2"])}>{error}</p>}
      </label>
    );
  }
);

Input.displayName = "Input";
