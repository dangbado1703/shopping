import React from "react";
import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

export interface IFormPropsModal {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  footer: JSX.Element | null;
  children: JSX.Element;
  onSubmit: UseFormHandleSubmit<FieldValues>;
  handleSubmit: (data: any) => void;
}
