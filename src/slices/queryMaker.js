import { createSlice } from "@reduxjs/toolkit";

export const queryMakerSlice = createSlice({
  name: "newsfeed",
  initialState: null,
  
  reducers: {
    addIdea: (state, action) => {
      const { id, idea } = action.payload;
      const theValue = state.find((e) => e.id === id).sug;
      theValue.push(idea);
    },
  },
});

export const { addIdea } = queryMakerSlice.actions;

export default queryMakerSlice.reducer;
