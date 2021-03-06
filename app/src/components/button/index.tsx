import React from "react";
import cn from "classnames";

import "./styles.scss";

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Danger = "danger",
  Unstyled = "unstyled"
}

export enum ButtonSize {
  Regular = "regular",
  Small = "small",
  Auto = "auto"
}

const Button: React.FC<Props> = React.forwardRef(
  (
    {
      children,
      className,
      variant = ButtonVariant.Primary,
      size = ButtonSize.Regular,
      outline,
      border = true,
      style,
      ...domProps
    },
    ref
  ) => (
    <button
      className={cn(
        "btn",
        `btn-${variant}${outline ? "-outline" : ""}`,
        `btn-${size}`,
        { "btn-border": border },
        "inline-flex",
        "items-center",
        "justify-center",
        "rounded",
        "cursor-pointer",
        "text-3",
        "no-underline",
        className
      )}
      style={style}
      {...domProps}
      ref={ref}
    >
      {children}
    </button>
  )
);

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  outline?: boolean;
  border?: boolean;
  ref?: React.RefObject<HTMLButtonElement>;
}

export default Button;
