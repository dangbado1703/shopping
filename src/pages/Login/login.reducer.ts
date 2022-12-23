import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TOKEN_KEY, USER_INFO } from "../../utils/contants";
import { IFormLogin } from "../../model/login.model";
import instance from "../../config/axios.config";

const initState = {
  token: localStorage.getItem(TOKEN_KEY) || "",
  dataUser: localStorage.getItem(USER_INFO) || null,
};
export const login = createAsyncThunk(
  "login/login",
  async (data: IFormLogin) => {
    const result = await instance.post("/user/login", data);
    return result;
  }
);
const loginSlice = createSlice({
  name: "login",
  initialState: initState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      localStorage.setItem(TOKEN_KEY, action.payload.data.data.token);
      state.token = action.payload.data.data.token;
      state.dataUser = action.payload.data.data;
    });
  },
});

const loginReducer = loginSlice.reducer;
export default loginReducer;
