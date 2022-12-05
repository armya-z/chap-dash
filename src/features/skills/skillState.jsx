import { createSlice } from "@reduxjs/toolkit";

export const skillSlice = createSlice({
  name: "skill",
  initialState: {
    skills: [],
    isLoading: false,
  },
  reducers: {
    getSkillsFetch: (state) => {
      state.isLoading = true;
    },
    getSkillsSuccess: (state, action) => {
      state.skills = action.payload;
      state.isLoading = false;
    },
    getSkillsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  getSkillsFailure,
  getSkillsFetch,
  getSkillsSuccess,
} = skillSlice.actions;

export default skillSlice.reducer;
