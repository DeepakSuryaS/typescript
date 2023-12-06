import { type FC } from "react";

type InputProps = {
  label: string;
  id: string;
};

const Input: FC<InputProps> = ({ label, id }) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" />
    </p>
  );
};

export default Input;
