import { ButtonHTMLAttributes } from "react";
import "./button.css";

function Button({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="button-container" {...props}>
      {props.children}
    </button>
  );
}

export default Button;
