import { createSlice } from "@reduxjs/toolkit";

export const queryMakerSlice = createSlice({
  name: "newsfeed",
  initialState: [
    {
      id: 1,
      query:
        "we are working with Smarty Template Engine in most of our projects which usually uses curly braces for expressions (i.e. {stuff happens}).Our local enviroment however uses <%stuff happens%> instead. I want to modify the language.json of the Smarty Template Support-Extension for VS-Code to properly highlight my code. I had good success with writing the regex for the regular code-blocks, however comment-blocks are not really working. Pictured hereInspection of the tokens reveals, that other scopes seem to take priority Pictured here",
      idea: "Listen music",
      sug: ["sug1"],
    },
    {
      id: 2,
      query:
        "we are working with Smarty Template Engine in most of our projects which usually uses curly braces for expressions (i.e. {stuff happens}).Our local enviroment however uses <%stuff happens%> instead. I want to modify the language.json of the Smarty Template Support-Extension for VS-Code to properly highlight my code. I had good success with writing the regex for the regular code-blocks, however comment-blocks are not really working. Pictured hereInspection of the tokens reveals, that other scopes seem to take priority Pictured here",

      idea: "dance",
      sug: ["sug2"],
    },
    {
      id: 2,
      query:
        "we are working with Smarty Template Engine in most of our projects which usually uses curly braces for expressions (i.e. {stuff happens}).Our local enviroment however uses <%stuff happens%> instead. I want to modify the language.json of the Smarty Template Support-Extension for VS-Code to properly highlight my code. I had good success with writing the regex for the regular code-blocks, however comment-blocks are not really working. Pictured hereInspection of the tokens reveals, that other scopes seem to take priority Pictured here",

      idea: "dance",
      sug: ["sug2"],
    },
   
  ],
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
