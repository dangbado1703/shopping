import { FormDataHome } from "./home.modle";

export interface IFormDataProducts {
  dataProducts: FormDataHome[];
  dataCategory: FormDataCategory[];
  dataDetailProduct: FormDataHome | null;
}

export interface FormDataCategory {
  createdAt: string;
  id: string;
  name: string;
  updatedAt: string;
}

export interface IFormSearchProducts {
  product_id: string;
  product_name: string;
  product_code: string;
  category_id: any[];
  facturers: string;
  status: string;
  price_from: string;
  price_to: string;
  stock_from: string;
  stock_to: string;
  offset: string;
  size: number;
  page: number;
  star: any[];
  discount: any[];
}
