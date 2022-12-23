import React from "react";

interface IFormPropsButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element;
  fullWidth?: boolean;
}
const ButtonCancel = ({
  children,
  fullWidth = false,
  ...rest
}: IFormPropsButton) => {
  const classNameBtn =
    "w-full outline-none rounded-md border-none bg-red-400 hover:bg-red-500 text-[16px] text-white cursor-pointer focus:border focus:border-green-600 focus:ring p-2";
  return (
    <div>
      <button
        className={
          fullWidth ? classNameBtn + " w-full" : classNameBtn + " w-[100px]"
        }
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonCancel;
