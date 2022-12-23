import React from "react";
import { useAppSelector } from "../../store/hooks";
import ReactStars from "react-rating-stars-component";
import { CONVERT_MONEY } from "../../utils/contants";
import Pagination from "../../utils/Pagination";
import { IFormSearchProducts } from "../../model/products.model";
import { useNavigate } from "react-router-dom";

interface IFormProps {
  page: number;
  size: number;
  valueSearch: Partial<IFormSearchProducts>;
}
const ProductsShow = ({ page, size, valueSearch }: IFormProps) => {
  const navigate = useNavigate();
  const { data, totalElements } = useAppSelector(
    (state) => state.productsReducer
  );
  return (
    <div>
      {data?.dataProducts.map((item) => (
        <div className="mb-8 flex">
          <div className="w-1/3">
            <img
              src={item?.image}
              onClick={() => navigate(`/product/detail/${item.product_id}`)}
              className="w-full"
            />
          </div>
          <div className="w-2/3 ml-5 flex flex-col justify-between">
            <span>Tên sản phẩm: {item?.product_name}</span>
            <span>Mã sản phẩm: {item?.product_code}</span>
            <span>Gía tiền: {CONVERT_MONEY(Number(item?.product_price))}</span>
            <div>
              <span>
                Loại sản phẩm:{" "}
                {item?.category_name?.map((value) => {
                  if (value) {
                    return (
                      <span className="inline-block bg-green-400 mr-2 text-[13px] p-1 rounded-[6px] text-center text-white">
                        {value}
                      </span>
                    );
                  }
                })}
              </span>
            </div>
            <div className="flex items-center justify-start">
              <span>Đánh giá</span>
              <ReactStars
                value={item?.star}
                edit={false}
                size={30}
                classNames="__custom-product-star"
              />
            </div>
            <span>Số lượng đã bán: {item?.sold}</span>
            <span>Số lượng còn lại: {item?.stock}</span>
          </div>
        </div>
      ))}
      <div>
        <Pagination totalElements={totalElements} page={page} size={size} />
      </div>
    </div>
  );
};

export default ProductsShow;
