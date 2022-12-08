import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface IFormPropsCustomInput extends HTMLInputElement {
  label: string;
  required: boolean;
  register: UseFormRegister<FieldValues>;
}

const InputCommon = ({
  label,
  register,
  required = false,
  ...rest
}: IFormPropsCustomInput) => {
  return (
    <div>
      <input {...register(label, { required })} />
    </div>
  );
};

export default InputCommon;
