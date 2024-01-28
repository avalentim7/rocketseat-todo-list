import { InputHTMLAttributes } from "react";
import "./input.css";

function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className="input-container" {...props} />;
}

export default Input;
