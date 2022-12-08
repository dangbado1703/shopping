import React from "react";
import { useAppSelector } from "../../store/hooks";
import ImageCommon from "../../utils/ImageCommon";

const BestSeller = () => {
  const { data } = useAppSelector((state) => state.homeReducer);
  const dataBestSeller = data?.dataBestSeller;
  console.log("dataBestSeller", dataBestSeller);
  return (
    <div className="grid grid-cols-4">
      {dataBestSeller?.map((item) => (
        <ImageCommon info={item} isEdit={false} />
      ))}
    </div>
  );
};

export default BestSeller;
