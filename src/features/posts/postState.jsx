import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    isLoading: false,
  },
  reducers: {
    getPostsFetch: (state) => {
      state.isLoading = true;
    },
    getPostsSuccess: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    getPostsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  getPostsFailure,
  getPostsFetch,
  getPostsSuccess,
} = postSlice.actions;
export default postSlice.reducer;
