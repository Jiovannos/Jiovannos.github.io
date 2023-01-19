import { createSlice } from "@reduxjs/toolkit";

const keywords = [
  { name: "portfolio", keys: ["frontend"] },
  { name: "saas", keys: ["react"] },
  { name: "minmax", keys: [] },
  { name: "weight", keys: ["react", "frontend"] },
  { name: "mtgScrapper", keys: ["react"] },
  { name: "eyeMouse", keys: ["react"] },
  { name: "procurement", keys: ["react", "frontend"] },
  { name: "chords", keys: [] },
  { name: "bodyPercussion", keys: [] },
  { name: "bigFatData", keys: [] },
];

const initialState = {
  searchWord: "",
  displayFields: {
    portfolio: "revert",
    saas: "revert",
    minmax: "revert",
    weight: "revert",
    mtgScrapper: "revert",
    eyeMouse: "revert",
    procurement: "revert",
    chords: "revert",
    bodyPercussion: "revert",
    bigFatData: "revert",
  },
};
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchWord: (state, action) => {
      state.searchWord = action.payload.searchWord;
    },
    filterProjects: (state, action) => {
      if (action.payload !== "") {
        let pattern = new RegExp("[^a-zA-Z0-9]", "gmi");
        let searchWord = action.payload.replaceAll(pattern, "").toLowerCase();
        let matchedProjects = keywords
          .filter((project) => project.keys.includes(searchWord))
          .map((project) => project.name);

        for (let project in state.displayFields) {
          if (matchedProjects.includes(project)) {
            state.displayFields[project] = "revert";
          } else {
            state.displayFields[project] = "none";
          }
        }
      } else {
        for (let project in state.displayFields) {
          state.displayFields[project] = "revert";
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchWord, filterProjects } = searchSlice.actions;

export default searchSlice.reducer;
