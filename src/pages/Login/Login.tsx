import { Grid } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { IFormLogin } from "../../model/login.model";
import { useAppDispatch } from "../../store/hooks";
import ButtonSubmit from "../../utils/ButtonSubmit";
import InputCommon from "../../utils/InputCommon";
import { login } from "./login.reducer";

const Login = () => {
  const dispatch = useAppDispatch();
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const handleSubmitForm = (data: IFormLogin) => {
    dispatch(login(data))
      .then((res) => {
        console.log("res", res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
    name: keyof IFormLogin
  ) => {
    setValue(name, e.target.value.trim());
  };
  return (
    <div className="w-full flex justify-center items-center p-5 h-[100vh]">
      <Grid rowSpacing={1} columnSpacing={{ xs: 1 }} className="w-[500px]">
        <form onSubmit={handleSubmit(handleSubmitForm)} className="w-full">
          <Grid item xs={12}>
            <InputCommon
              control={control}
              name="username"
              onBlur={(e) => handleBlur(e, "username")}
              hasError={!!errors && !!errors.username}
              message={errors.username?.message}
              label="Username"
              rules={{
                required: {
                  value: true,
                  message: "Trường này là bắt buộc",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} className="mt-4">
            <InputCommon
              control={control}
              name="password"
              onBlur={(e) => handleBlur(e, "password")}
              hasError={!!errors && !!errors.password}
              message={errors.password?.message}
              label="Password"
              type="password"
              rules={{
                required: {
                  value: true,
                  message: "Trường này là bắt buộc",
                },
              }}
            />
          </Grid>
          <ButtonSubmit type="submit" className="mt-4 text-end w-full">
            <span>Đăng nhập</span>
          </ButtonSubmit>
        </form>
      </Grid>
    </div>
  );
};

export default Login;
