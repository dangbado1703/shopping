import React, { useEffect, useState } from "react";
import ProductsShow from "../../component/Products/ProductsShow";
import SearchProducts from "../../component/Products/SearchProducts";
import { IFormSearchProducts } from "../../model/products.model";
import { useAppDispatch } from "../../store/hooks";
import { getCategory } from "./products.reducer";
import "./products.scss";

const Products = () => {
  const [valueSearch, setValueSearch] = useState<Partial<IFormSearchProducts>>({
    star: [],
    category_id: [],
    price_from: "",
    price_to: "",
    product_name: "",
    discount: [],
  });
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategory({}));
  }, [dispatch]);
  return (
    <div>
      <div className="products-title">
        <span>Products</span>
      </div>
      <div className="container-products">
        <SearchProducts
          valueSearch={valueSearch}
          setValueSearch={setValueSearch}
        />
        <ProductsShow page={page} size={size} valueSearch={valueSearch} />
      </div>
    </div>
  );
};

export default Products;
