import React, { useEffect } from "react";
import Banner from "../../component/Home/Banner";
import BestSeller from "../../component/Home/BestSeller";
import Featured from "../../component/Home/Featured";
import { useAppDispatch } from "../../store/hooks";
import {
  getDataBanner,
  getDataBestSeller,
  getDataFeatured,
} from "./home.reducer";
import "./home.scss";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    Promise.all([
      dispatch(getDataBanner()),
      dispatch(getDataBestSeller()),
      dispatch(getDataFeatured()),
    ]);
  }, [dispatch]);
  return (
    <div className="home">
      <div className="w-2/3 h-[540px] m-auto overflow-hidden rounded-2xl">
        <Banner />
      </div>
      <div>
        <div className="text-center my-6">
          <span className="text-5xl font-thin title-products">
            Featured Products
          </span>
        </div>
        <Featured />
      </div>
      <div>
        <div className="text-center my-6">
          <span className="text-5xl font-thin title-products">Best Seller</span>
        </div>
        <BestSeller />
      </div>
    </div>
  );
};

export default Home;
