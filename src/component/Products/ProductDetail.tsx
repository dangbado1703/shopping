import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailProduct } from "../../pages/Products/products.reducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CONVERT_MONEY } from "../../utils/contants";
import ReactStars from "react-rating-stars-component";

const ProductDetail = () => {
  const navigate = useNavigate();
  const params = useParams<{ product_id: string }>();
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.productsReducer);
  useEffect(() => {
    if (params.product_id) {
      dispatch(getDetailProduct(params.product_id));
    }
  }, [params]);
  return (
    <div>
      <div className="mb-8 flex">
        <div className="w-1/3">
          <img
            src={data?.dataDetailProduct?.image}
            onClick={() =>
              navigate(`/product/detail/${data?.dataDetailProduct?.product_id}`)
            }
          />
        </div>
        <div className="w-2/3 ml-5 flex flex-col justify-between">
          <span>Tên sản phẩm: {data?.dataDetailProduct?.product_name}</span>
          <span>Mã sản phẩm: {data?.dataDetailProduct?.product_code}</span>
          <span>
            Gía tiền:{" "}
            {CONVERT_MONEY(Number(data?.dataDetailProduct?.product_price))}
          </span>
          <div>
            <span>
              Loại sản phẩm:{" "}
              {data?.dataDetailProduct?.category_name?.map((value) => {
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
              value={data?.dataDetailProduct?.star}
              edit={false}
              size={30}
              classNames="__custom-product-star"
            />
          </div>
          <span>Số lượng đã bán: {data?.dataDetailProduct?.sold}</span>
          <span>Số lượng còn lại: {data?.dataDetailProduct?.stock}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
