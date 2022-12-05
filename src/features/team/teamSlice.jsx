import { createSlice } from "@reduxjs/toolkit";

export const TeamSlice = createSlice({
  name: "team",
  initialState: {
    teams: [],
    isLoading: false,
  },

  reducers: {
    getTeamsFetch: (state) => {
      state.isLoading = true;
    },

    getTeamsSuccess: (state, action) => {
      state.teams = action.payload;
      state.isLoading = false;
    },

    getTeamFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  getTeamFailure,
  getTeamsFetch,
  getTeamsSuccess,
} = TeamSlice.actions;
export default TeamSlice.reducer;
