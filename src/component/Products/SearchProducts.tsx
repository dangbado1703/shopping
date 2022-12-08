import React, { useEffect, useState } from "react";
import CheckboxCommon from "../../utils/CheckboxCommon";
import {
  DISCOUNT_OFFER,
  PRICE_FILTER,
  RATING_ITEM,
} from "../../utils/contants";
import ReactStars from "react-rating-stars-component";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { IFormSearchProducts } from "../../model/products.model";
import { getDataProducts } from "../../pages/Products/products.reducer";

const SearchProducts = ({
  valueSearch,
  setValueSearch,
}: {
  valueSearch: Partial<IFormSearchProducts>;
  setValueSearch: React.Dispatch<
    React.SetStateAction<Partial<IFormSearchProducts>>
  >;
}) => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.productsReducer);
  useEffect(() => {
    dispatch(getDataProducts({ ...valueSearch, page: 1, size: 10 }));
  }, [
    valueSearch.star,
    valueSearch.category_id,
    valueSearch.price_from,
    valueSearch.price_to,
    valueSearch.discount,
  ]);
  const handleChangeValueDiscount = (value: string, checked: boolean) => {
    if (!checked) {
      setValueSearch((oldValue) => ({
        ...oldValue,
        discount: oldValue.discount?.concat(value),
      }));
    } else {
      setValueSearch((oldValue) => ({
        ...oldValue,
        discount: oldValue.discount?.filter((a) => a !== value),
      }));
    }
  };
  const handleChangeRate = (value: string, checked: boolean) => {
    if (!checked) {
      setValueSearch((oldValue) => ({
        ...oldValue,
        star: oldValue.star?.concat(value),
      }));
    } else {
      setValueSearch((oldValue) => ({
        ...oldValue,
        star: oldValue.star?.filter((a) => a !== value),
      }));
    }
  };
  const handleChangeCategory = (value: string, checked: boolean) => {
    if (!checked) {
      setValueSearch((oldValue) => ({
        ...oldValue,
        category_id: oldValue.category_id?.concat(value),
      }));
    } else {
      setValueSearch((oldValue) => ({
        ...oldValue,
        category_id: oldValue.category_id?.filter((a) => a !== value),
      }));
    }
  };
  const handleChangePrice = (value: string, checked: boolean) => {
    const newValue = PRICE_FILTER.find((item) => item.value === value);
    setValueSearch((oldValue) => ({
      ...oldValue,
      price_from: newValue?.from,
      price_to: newValue?.to,
    }));
  };
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(
        getDataProducts({
          ...valueSearch,
          page: 1,
          size: 10,
          product_name: (e.target as any).value,
        })
      );
    }
  };
  return (
    <div>
      <div>
        <span className="title">Discount Offer</span>
        <div className="mt-3">
          {DISCOUNT_OFFER.map((item) => (
            <CheckboxCommon
              type="checkbox"
              label={item.name}
              onChange={handleChangeValueDiscount}
              value={item.value}
              key={item.value}
              htmlFor="discount"
            />
          ))}
        </div>
      </div>
      <div>
        <span className="title">Rating Item</span>
        <div className="mt-3">
          {RATING_ITEM.map((item) => (
            <CheckboxCommon
              type="checkbox"
              value={item.rate}
              onChange={handleChangeRate}
              key={item.rate}
              htmlFor="rating"
              label={
                <ReactStars
                  value={item.rate}
                  edit={false}
                  classNames="custom-stars"
                />
              }
            />
          ))}
        </div>
      </div>
      <div>
        <span className="title">Price filter</span>
        <div className="mt-3">
          {PRICE_FILTER.map((item) => (
            <CheckboxCommon
              type="radio"
              value={item.value}
              onChange={handleChangePrice}
              key={item.value}
              htmlFor="price"
              label={item.name}
            />
          ))}
        </div>
      </div>
      <div>
        <span className="title">Category</span>
        <div className="mt-3">
          {data?.dataCategory?.map((item) => (
            <CheckboxCommon
              type="checkbox"
              value={item.name}
              onChange={handleChangeCategory}
              key={item.id}
              htmlFor="category"
              label={item.name}
            />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <input
          onKeyDown={(e) => handleSearch(e)}
          value={valueSearch.product_name}
          onChange={(e) =>
            setValueSearch({ ...valueSearch, product_name: e.target.value })
          }
          type="text"
          placeholder="Nhập tìm kiếm của bạn"
          className="outline-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 h-10 w-3/4 text-base font-medium text-black focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
    </div>
  );
};

export default SearchProducts;
