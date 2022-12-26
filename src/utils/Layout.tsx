import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { viewCart } from "../pages/Home/home.reducer";
import path from "../router/path";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { MENU } from "./contants";
import "./layout.scss";

const Layout = () => {
  const [isPage, setIsPage] = useState("/");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    setIsPage(location.pathname);
  }, [location]);
  useEffect(() => {
    dispatch(viewCart({ page: 1, size: 10 }));
  }, [dispatch]);
  const { totalCart } = useAppSelector((state) => state.homeReducer);
  const className =
    "flex justify-center border-b-4 hover:text-indigo-600 hover:border-b-4 hover:border-indigo-500 py-4 cursor-pointer transition ease-in-out";
  return (
    <div>
      <div className="header">
        <div className="grid grid-cols-2 bg-green-400 px-64 py-4">
          <div className="flex items-center">
            <div className="flex mr-10 text-white">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <span>Email</span>
            </div>
            <div className="flex text-white">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <span>Phone number</span>
            </div>
          </div>
          <div className="flex justify-end text-white">
            <div className="mr-10 cursor-pointer">
              <span>Login</span>
            </div>
            <div>
              <div
                className="relative cursor-pointer"
                onClick={() => navigate(path.cart)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <div className="absolute -top-2 text-yellow-50 text-xs -right-3 w-4 h-4 bg-red-500 flex justify-center items-center rounded-full">
                  <span>{totalCart}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu py-9 px-36 bg-slate-50">
        <ul className="grid grid-flow-col text-center border-b border-gray-200 text-gray-500">
          {MENU.map((item) => (
            <li className="text-center list-none">
              <span
                className={
                  isPage === item.path
                    ? className + " border-indigo-600"
                    : className
                }
                onClick={() => {
                  setIsPage(item.path);
                  navigate(item.path);
                }}
              >
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-20 px-48">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
