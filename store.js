import { configureStore } from "@reduxjs/toolkit";
import spaceReducer from "./redux/spaceSlice";
import searchReducer from "./redux/searchSlice";

export const store = configureStore({
  reducer: {
    space: spaceReducer,
    search: searchReducer,
  },
});
