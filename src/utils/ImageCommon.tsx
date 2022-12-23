import React from "react";
import { FormDataHome } from "../model/home.modle";
import Cart from "../assets/cart-shopping.png";
import Heart from "../assets/heart.png";
import ReactStars from "react-rating-stars-component";

interface FormProps {
  info: FormDataHome;
  onChangeValue?: (newValue: string) => void;
  isEdit: boolean;
}
const ImageCommon = ({ info, onChangeValue, isEdit }: FormProps) => {
  const option = {
    size: 20,
    count: 5,
    color: "black",
    value: info.star || 0,
    a11y: true,
    isHalf: true,
    edit: isEdit,
    classNames: "rating-stars",
    onChange: (newValue: string) => {
      console.log(`Example 2: new value is ${newValue}`);
      if (onChangeValue) onChangeValue(newValue);
    },
  };
  return (
    <div className="w-72 px-6 pb-6 pt-10 rounded-lg hover:scale-110 mb-5 transition-all group cursor-pointer relative image-common">
      <div className="absolute top-2 left-4 w-6 h-6 rounded-full flex items-center justify-center hover:bg-sky-300 transition ease-linear delay-150">
        <img src={Cart} alt="image" />
      </div>
      <div className="absolute top-2 left-12 w-6 h-6 rounded-full flex items-center justify-center hover:bg-sky-300 transition ease-linear delay-150">
        <img src={Heart} alt="image" />
      </div>
      <div className="w-full">
        <img src={info?.image} className="w-full h-40" />
      </div>
      <div className="flex flex-col items-center group-hover:bg-violet-500 group-hover:text-white pt-4 transition-all">
        <span>{info?.product_name}</span>
        <span>Code: {info?.product_code}</span>
        <ReactStars {...option} />
        <span>Stock: {info?.stock}</span>
        <span>${info?.product_price}</span>
      </div>
    </div>
  );
};

export default ImageCommon;
