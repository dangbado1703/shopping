import path from "../router/path";

export const TOKEN_KEY = "shopping_token";
export const MENU = [
  {
    name: "Trang chủ",
    path: path.home,
  },
  {
    name: "Danh sách sản phẩm",
    path: path.products,
  },
  {
    name: "Blog",
    path: path.home,
  },
  {
    name: "Shop",
    path: path.home,
  },
  {
    name: "Contact",
    path: path.home,
  },
  {
    name: "Danh sách yêu thích",
    path: path.home,
  },
  {
    name: "Lịch sử mua hàng",
    path: path.home,
  },
];

export const DISCOUNT_OFFER = [
  {
    isChecked: false,
    name: "20% Cashback",
    value: 1,
  },
  {
    isChecked: false,
    name: "5% Cashback Offer",
    value: 2,
  },
  {
    isChecked: false,
    name: "25% Discount Offer",
    value: 3,
  },
];
export const RATING_ITEM = [
  {
    isChecked: false,
    total: "54321",
    image: [
      require("../assets/rate.png"),
      require("../assets/rate.png"),
      require("../assets/rate.png"),
      require("../assets/rate.png"),
      require("../assets/rate.png"),
    ],
    rate: 5,
  },
  {
    isChecked: false,
    total: "4321",
    image: [
      require("../assets/rate.png"),
      require("../assets/rate.png"),
      require("../assets/rate.png"),
      require("../assets/rate.png"),
      require("../assets/rate-none.png"),
    ],
    rate: 4,
  },
  {
    isChecked: false,
    total: "321",
    image: [
      require("../assets/rate.png"),
      require("../assets/rate.png"),
      require("../assets/rate.png"),
      require("../assets/rate-none.png"),
      require("../assets/rate-none.png"),
    ],
    rate: 3,
  },
  {
    isChecked: false,
    total: "21",
    image: [
      require("../assets/rate.png"),
      require("../assets/rate.png"),
      require("../assets/rate-none.png"),
      require("../assets/rate-none.png"),
      require("../assets/rate-none.png"),
    ],
    rate: 2,
  },
  {
    isChecked: false,
    total: "1",
    image: [
      require("../assets/rate.png"),
      require("../assets/rate-none.png"),
      require("../assets/rate-none.png"),
      require("../assets/rate-none.png"),
      require("../assets/rate-none.png"),
    ],
    rate: 1,
  },
];

export const CATAGORIES = [
  {
    isChecked: false,
    name: "Prestashop",
    value: 1,
  },
  {
    isChecked: false,
    name: "Magento",
    value: 2,
  },
  {
    isChecked: false,
    name: "Bigcommerce",
    value: 3,
  },
  {
    isChecked: false,
    name: "osCommerce",
    value: 4,
  },
  {
    isChecked: false,
    name: "3dcart",
    value: 5,
  },
  {
    isChecked: false,
    name: "Bags",
    value: 6,
  },
  {
    isChecked: false,
    name: "Watches",
    value: 7,
  },
];

export const PRICE_FILTER = [
  {
    isChecked: false,
    name: "0.00đ - 200.000đ",
    value: "0 - 200.000",
    from: "0",
    to: "200000",
  },
  {
    isChecked: false,
    name: "200.000đ - 500.000đ",
    value: "200.000 - 500.000",
    from: "200000",
    to: "500000",
  },
  {
    isChecked: false,
    name: "500.000đ - 1.000.000đ",
    value: "500.000 - 1.000.000",
    from: "500000",
    to: "1000000",
  },
  {
    isChecked: false,
    name: "1.000.000++",
    value: "1.000.000",
    from: "1000000",
    to: "",
  },
];

export const CONVERT_MONEY = (number: number) => {
  const money = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  }).format(number);
  return money;
};

export const USER_INFO = "user_ifo";
