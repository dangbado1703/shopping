import React from "react";

interface IFormPropsButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element;
  fullWidth?: boolean;
}
const ButtonSubmit = ({
  children,
  className,
  fullWidth = false,
  ...rest
}: IFormPropsButton) => {
  const classNotLoading =
    "p-2 text-white bg-green-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-300 transition-all";
  const classNameBtn =
    "outline-none rounded-md border-none bg-green-500 text-[16px] hover:bg-green-600 text-white cursor-pointer focus:border focus:border-green-600 focus:ring p-2";
  return (
    <div className={className}>
      <button
        {...rest}
        className={
          fullWidth ? classNameBtn + " w-full" : classNameBtn + " w-[100px]"
        }
      >
        <div>{children}</div>
      </button>
    </div>
  );
};

export default ButtonSubmit;
