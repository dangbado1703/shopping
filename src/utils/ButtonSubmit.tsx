import React from "react";

interface IFormPropsButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element;
}
const ButtonSubmit = ({ children, className, ...rest }: IFormPropsButton) => {
  const classNotLoading =
    "p-2 text-white bg-green-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-300 transition-all";
  return (
    <div className={className}>
      <button
        className="w-full p-2 text-white bg-green-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-300 transition-all"
        {...rest}
      >
        <div>{children}</div>
      </button>
    </div>
  );
};

export default ButtonSubmit;
