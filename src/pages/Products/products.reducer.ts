import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../config/axios.config";
import { FormDataHome } from "../../model/home.modle";
import {
  IFormDataProducts,
  IFormSearchProducts,
} from "../../model/products.model";
import { InitStateForm } from "../../model/root.model";
const initState: InitStateForm<IFormDataProducts> = {
  isLoading: false,
  data: {
    dataProducts: [],
    dataCategory: [],
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
      });
  },
});

const productsReducer = productSlice.reducer;
export default productsReducer;
