import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

interface IFormPropsButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element;
  fullWidth?: boolean;
  loading?: boolean;
}
const ButtonSubmit = ({
  children,
  className,
  loading = false,
  fullWidth = false,
  ...rest
}: IFormPropsButton) => {
  const classNotLoading =
    "p-2 text-white bg-green-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-300 transition-all";
  const classNameBtn =
    "outline-none rounded-md border-none bg-green-500 text-[16px] hover:bg-green-600 text-white cursor-pointer focus:border focus:border-green-600 focus:ring p-2";
  const classNameBtnLoading =
    "outline-none rounded-md border-none bg-green-200 text-[16px] cursor-not-allowed text-white focus:border focus:border-green-600 focus:ring p-2";
  return (
    <div className={className}>
      {loading ? (
        <button
          {...rest}
          className={
            fullWidth ? classNameBtnLoading + " w-full" : classNameBtnLoading
          }
          disabled={loading}
        >
          <div className="flex justify-center items-center">
            <CircularProgress size={20} className="mr-1" />
            {children}
          </div>
        </button>
      ) : (
        <button
          {...rest}
          className={fullWidth ? classNameBtn + " w-full" : classNameBtn}
          disabled={loading}
        >
          <div className="flex justify-center items-center">{children}</div>
        </button>
      )}
    </div>
  );
};

export default ButtonSubmit;
