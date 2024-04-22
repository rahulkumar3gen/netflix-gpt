import { createSlice } from "@reduxjs/toolkit";

const configSlisce = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});
export const { changeLanguage } = configSlisce.actions;
export default configSlisce.reducer;
