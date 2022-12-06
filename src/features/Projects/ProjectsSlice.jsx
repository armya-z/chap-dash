import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: [],
    isLoading: false,
  },
  reducers: {
    getProjectFetch: (state) => {
      state.isLoading = true;
    },

    getProjectSuccess: (state, action) => {
      state.isLoading = false;
      state.projects = action.payload;
    },

    getProjectFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  getProjectFailure,
  getProjectFetch,
  getProjectSuccess,
} = projectSlice.actions;
export default projectSlice.reducer;
