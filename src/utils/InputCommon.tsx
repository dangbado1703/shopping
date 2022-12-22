import { BaseTextFieldProps, TextField } from "@mui/material";
import { Theme } from "@mui/system";
import { Control, Controller, RegisterOptions } from "react-hook-form";
import { IFormLogin } from "../model/login.model";
import "./layout.scss";

interface IFormPropsCustomInput extends BaseTextFieldProps {
  control: Control<IFormLogin, any>;
  name: keyof IFormLogin;
  message?: string;
  hasError?: boolean;
  rules: Omit<
    RegisterOptions<any, any>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

const InputCommon = ({
  control,
  name,
  message,
  hasError,
  rules,
  ...rest
}: IFormPropsCustomInput) => {
  return (
    <>
      <Controller
        rules={rules}
        control={control}
        name={name}
        render={({ field: { onChange, value, ref } }) => (
          <TextField
            {...rest}
            error={hasError}
            helperText={message}
            value={value}
            onChange={onChange}
            size="small"
            fullWidth
            placeholder={name}
            inputProps={{
              className:
                "placeholder:text-[12px] placeholder:italic h-6 text-[12px]",
            }}
            InputLabelProps={{
              className: "text-[14px]",
            }}
          />
        )}
      />
    </>
  );
};

export default InputCommon;
