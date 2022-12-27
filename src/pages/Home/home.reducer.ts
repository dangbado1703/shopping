import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import instance from "../../config/axios.config";
import { FormDataHome, FormDataInitState } from "../../model/home.modle";
import { InitStateForm } from "../../model/root.model";

const initState: InitStateForm<FormDataInitState<FormDataHome>> = {
  data: {
    dataBestSeller: [],
    dataBanner: [],
    dataFeatured: [],
  },
  totalElements: 0,
  dataCart: [],
  totalCart: 0,
  isLoading: false,
};

export const getDataFeatured = createAsyncThunk(
  "home/getDataFeatured",
  async () => {
    const result = await instance.get("/products/get-featured");
    return result;
  }
);

export const getDataBanner = createAsyncThunk(
  "home/getDataBanner",
  async () => {
    const result = await instance.get("/products/get-banner");
    return result;
  }
);

export const getDataBestSeller = createAsyncThunk(
  "home/getDataBestSeller",
  async () => {
    const result = await instance.get("/products/get-best-seller");
    return result;
  }
);

export const addToCart = createAsyncThunk(
  "home/addToCart",
  async ({ product_id }: { product_id: string }) => {
    const result = await instance.post("/add-to-cart", { product_id });
    toast.success(result.data.message);
    return result;
  }
);

export const viewCart = createAsyncThunk(
  "home/viewCart",
  async ({ page, size }: { page: number; size: number }) => {
    const result = await instance.get(`/view-cart?page=${page}&size=${size}`);
    const newData = result.data.data.map((item: any, index: number) => ({
      ...item,
      id: item.product_id,
      no: (page - 1) * size + index + 1,
    }));
    return { newData, totalElements: result.data.totalElements };
  }
);

const homeSlice = createSlice({
  name: "Home",
  initialState: initState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getDataFeatured.fulfilled, (state, action) => {
        if (state.data) {
          state.data.dataFeatured = action.payload.data.data;
        }
      })
      .addCase(getDataBanner.fulfilled, (state, action) => {
        if (state.data) {
          state.data.dataBanner = action.payload.data.data;
        }
      })
      .addCase(getDataBestSeller.fulfilled, (state, action) => {
        if (state.data) {
          state.data.dataBestSeller = action.payload.data.data;
          state.totalElements = action.payload.data.totalElements;
        }
      })
      .addCase(viewCart.fulfilled, (state, action) => {
        state.dataCart = action.payload.newData;
        state.totalCart = action.payload.totalElements;
        state.isLoading = false;
      })
      .addCase(viewCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(viewCart.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

const homeReducer = homeSlice.reducer;
export default homeReducer;
