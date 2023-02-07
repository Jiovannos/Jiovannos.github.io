import { createSlice } from "@reduxjs/toolkit";

// Keywords to match projects
const keywords = [
  {
    name: "portfolio",
    keys: [
      "frontend",
      "javascript",
      "react",
      "reactjs",
      "three",
      "threejs",
      "html",
      "css",
      "3danimation",
      "redux",
    ],
  },
  {
    name: "saas",
    keys: [
      "fullstack",
      "frontend",
      "backend",
      "javascript",
      "react",
      "reactjs",
      "express",
      "expressjs",
      "node",
      "nodejs",
      "html",
      "css",
      "sql",
      "mysql",
      "mongodb",
      "mongo",
      "selenium",
      "scrapping",
      "etl",
      "ocr",
      "gcp",
      "docker",
      "rest",
      "redux",
    ],
  },
  {
    name: "minmax",
    keys: [
      "fullstack",
      "frontend",
      "backend",
      "python",
      "flask",
      "statistics",
      "dataanalysis",
      "javascript",
      "typescript",
      "react",
      "reactjs",
      "express",
      "expressjs",
      "node",
      "nodejs",
      "html",
      "css",
      "sql",
      "mongodb",
      "mongo",
      "docker",
      "rest",
      "redux",
    ],
  },
  { name: "weight", keys: ["python", "gui", "sql", "mysql"] },
  {
    name: "eyeMouse",
    keys: ["python", "gui", "opencv", "tensorflow", "machinelearning"],
  },
  { name: "mtgScrapper", keys: [] },
  { name: "procurement", keys: [] },
  {
    name: "chords",
    keys: [
      "fullstack",
      "frontend",
      "backend",
      "javascript",
      "react",
      "reactjs",
      "express",
      "expressjs",
      "node",
      "nodejs",
      "html",
      "css",
      "sql",
      "mysql",
      "mongodb",
      "mongo",
      "rest",
      "docker",
      "redux",
    ],
  },
  { name: "bodyPercussion", keys: [] },
  { name: "bigFatData", keys: [] },
];

// Filtered projects have display set to none otherwise revert
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
      state.searchWord = action.payload;
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
