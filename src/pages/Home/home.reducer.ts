import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../config/axios.config";
import { FormDataHome, FormDataInitState } from "../../model/home.modle";
import { InitStateForm } from "../../model/root.model";

const initState: InitStateForm<FormDataInitState<FormDataHome>> = {
  data: {
    dataBestSeller: [],
    dataBanner: [],
    dataFeatured: [],
  },
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
        }
      });
  },
});

const homeReducer = homeSlice.reducer;
export default homeReducer;
