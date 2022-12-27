import React from "react";
import { addToCart, viewCart } from "../../pages/Home/home.reducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ImageCommon from "../../utils/ImageCommon";

const Featured = () => {
  const { data } = useAppSelector((state) => state.homeReducer);
  const dispatch = useAppDispatch();
  const handleAddToCart = (product_id: string) => {
    dispatch(addToCart({ product_id })).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(viewCart({ page: 1, size: 10 }));
      }
    });
  };
  return (
    <div className="grid grid-cols-4">
      {data?.dataFeatured?.map((item) => (
        <ImageCommon onAddToCart={handleAddToCart} info={item} isEdit={false} />
      ))}
    </div>
  );
};

export default Featured;
