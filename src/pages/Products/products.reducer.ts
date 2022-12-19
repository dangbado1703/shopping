import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../config/axios.config";
import { FormDataHome } from "../../model/home.modle";
import {
  IFormDataProducts,
  IFormSearchProducts,
} from "../../model/products.model";
import { IFormRating } from "../../model/rating.model";
import { InitStateForm } from "../../model/root.model";
const initState: InitStateForm<IFormDataProducts> = {
  isLoading: false,
  data: {
    dataProducts: [],
    dataCategory: [],
    dataDetailProduct: null,
  },
  totalElements: 0,
};

export const getDataProducts = createAsyncThunk(
  "products/getDataProducts",
  async ({ page, size, ...rest }: Partial<IFormSearchProducts>) => {
    const result = await instance.post(
      `/products/search?page=${page}&size=${size}`,
      rest
    );
    return result;
  }
);

export const getCategory = createAsyncThunk(
  "products/getCategory",
  async (data: any) => {
    const result = await instance.post(
      `/products/get-category?page=1&size=1000`,
      data
    );
    return result;
  }
);

export const getDetailProduct = createAsyncThunk(
  "products/getDetail",
  async (id: string) => {
    const result = await instance.get(`/products/detail?product_id=${id}`);
    console.log("result", result);
    return result;
  }
);

export const addReview = createAsyncThunk(
  "products/addReview",
  async (data: IFormRating) => {
    const result = await instance.post("/products", data);
    console.log("result", result);
    return result;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: initState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCategory.fulfilled, (state, action) => {
        if (state.data) {
          state.data.dataCategory = action.payload.data.data;
        }
      })
      .addCase(getDataProducts.fulfilled, (state, action) => {
        if (state.data) {
          state.data.dataProducts = action.payload.data.data;
        }
        state.totalElements = action.payload.data.totalElements;
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        if (state.data) {
          state.data.dataDetailProduct = action.payload.data.data;
        }
      })
      .addCase(addReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addReview.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addReview.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});

const productsReducer = productSlice.reducer;
export default productsReducer;
