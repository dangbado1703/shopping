import { FormDataHome } from "./home.modle";

export interface IFormCart
  extends Omit<
    FormDataHome,
    "createdAt" | "updatedAt" | "user_id" | "is_banner" | "is_featured"
  > {}
