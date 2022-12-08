import React from "react";
import { useAppSelector } from "../../store/hooks";
import ImageCommon from "../../utils/ImageCommon";

const Featured = () => {
  const { data } = useAppSelector((state) => state.homeReducer);
  return (
    <div className="grid grid-cols-4">
      {data?.dataFeatured?.map((item) => (
        <ImageCommon info={item} isEdit={false} />
      ))}
    </div>
  );
};

export default Featured;
