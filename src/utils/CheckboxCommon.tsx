import React, { useState } from "react";

interface FormProps {
  label: string | JSX.Element | JSX.Element[] | undefined;
  value: any;
  onChange: (value: string, checked: boolean) => void;
  htmlFor: string;
  type: "checkbox" | "radio";
}
const CheckboxCommon = ({
  label,
  onChange,
  value,
  htmlFor,
  type,
}: FormProps) => {
  const [checked, setChecked] = useState(false);
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange(e.target.value, checked);
  };
  return (
    <div className="form-check relative">
      <input
        className="custom-inp appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-[2px] align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type={type}
        value={value}
        id={htmlFor + value}
        onChange={(e) => handleChangeValue(e)}
        name={type}
        checked={type === "checkbox" ? checked : undefined}
      />
      <Check />
      <label
        className="inline-block text-gray-800 cursor-pointer"
        htmlFor={htmlFor + value}
      >
        {label}
      </label>
    </div>
  );
};

const Check = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-3 h-3 text-white absolute font-medium top-[4px] left-[2px] hidden svg-icon cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
};

export default CheckboxCommon;
