export interface FormDataInitState<T> {
  dataFeatured?: T[];
  dataBanner?: T[];
  dataBestSeller?: T[];
}

export interface FormDataHome {
  product_id: string;
  user_id: string;
  product_name: string;
  product_code: string;
  facturers: string;
  status: string;
  product_price: string;
  createdAt: string;
  updatedAt: string;
  stock: string;
  image: string;
  is_banner: string;
  is_featured: string;
  sold: string;
  star: number | null;
  category_name: string[];
}
