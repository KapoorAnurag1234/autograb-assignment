import React from "react";
import { BUTTON_TYPE } from "../constants/vehicle.ts";

interface ButtonProps {
  type: BUTTON_TYPE;
  title: string;
  onClick?: () => void;
}

export default function Button({ type, title, onClick }: ButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      {title}
    </button>
  );
}
