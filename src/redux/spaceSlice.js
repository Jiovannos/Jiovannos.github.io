import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contents: {
    focus: false,
    dicePosition: { x: 0, y: 0, z: -25 },
    diceFocus: false,
    rotation: { x: 0, y: 0, z: 0 },
    zoom: 1,
    visibility: "visible",
    opacity: 1,
  },
  about: {
    focus: false,
    dicePosition: { x: 0, y: -35, z: 0 },
    diceFocus: false,
    rotation: { x: 0, y: 0, z: 0 },
    zoom: 1,
    visibility: "hidden",
    opacity: 0,
  },
  stacks: {
    focus: false,
    dicePosition: { x: -15, y: 0, z: 0 },
    diceFocus: false,
    rotation: { x: 0, y: 0, z: 0 },
    zoom: 1,
    visibility: "hidden",
    opacity: 0,
  },
  projects: {
    focus: false,
    dicePosition: { x: 25, y: 0, z: 0 },
    diceFocus: false,
    rotation: { x: 0, y: 0, z: 0 },
    zoom: 1,
    visibility: "hidden",
    opacity: 0,
  },
  contact: {
    focus: false,
    dicePosition: [0, 0, 0],
    diceFocus: false,
  },
  card: {
    visibility: "hidden",
    opacity: 0,
  },
};
export const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {
    rotateContents: (state, action) => {
      let rotation = {
        about: { x: 3.14, y: 0, z: 3.14 / 3 },
        stacks: { x: -3.14 / 3, y: 0, z: 0 },
        projects: { x: -3.14 / 3, y: 0, z: -(3.14 * 2) / 3 },
        contact: { x: -3.14 / 3, y: 0, z: (3.14 * 2) / 3 },
      };
      let currentRotation = rotation[action.payload.rotation];
      state.contents.rotation = currentRotation;
    },
    setFocus: (state, action) => {
      state[action.payload.category].focus = action.payload.focused;
    },
    setPosition: (state, action) => {
      state[action.payload.category].dicePosition = action.payload.position;
    },
    setZoom: (state, action) => {
      state[action.payload.category].zoom = action.payload.zoom;
    },
    setVisibility: (state, action) => {
      state[action.payload.category].visibility = action.payload.visibility;
      state[action.payload.category].opacity = action.payload.opacity;
    },
    rotatePosition: (state, action) => {
      let positions = [
        { x: -15, y: 0, z: -8 },
        { x: 0, y: 0, z: -25 },
        { x: 15, y: 0, z: 0 },
        { x: 0, y: 0, z: 15 },
        { x: 0, y: 15, z: 0 },
        { x: 0, y: -15, z: 0 },
      ];
      if (action.payload.rotateTo === "contents") {
        state.stacks.dicePosition = positions[0];
        state.contents.dicePosition = positions[1];
        state.projects.dicePosition = positions[2];
        state.about.dicePosition = positions[5];
      } else if (action.payload.rotateTo === "stacks") {
        state.stacks.dicePosition = positions[1];
        state.contents.dicePosition = positions[2];
        state.projects.dicePosition = positions[3];
        state.about.dicePosition = positions[5];
      } else if (action.payload.rotateTo === "projects") {
        state.stacks.dicePosition = positions[3];
        state.contents.dicePosition = positions[0];
        state.projects.dicePosition = positions[1];
        state.about.dicePosition = positions[5];
      } else if (action.payload.rotateTo === "about") {
        state.stacks.dicePosition = positions[0];
        state.contents.dicePosition = positions[4];
        state.projects.dicePosition = positions[2];
        state.about.dicePosition = positions[1];
      }
    },
    checkUrl: (state, action) => {
      let positions = [
        { x: -15, y: 0, z: -8 },
        { x: 0, y: 0, z: -25 },
        { x: 15, y: 0, z: 0 },
        { x: 0, y: 0, z: 15 },
        { x: 0, y: 15, z: 0 },
        { x: 0, y: -15, z: 0 },
      ];
      let focusedPosition = { x: -2, y: 0, z: -8 };

      if (window.location.pathname === "/") {
        state.stacks.dicePosition = positions[0];
        state.projects.dicePosition = positions[2];
        state.about.dicePosition = positions[5];
        state.contents.dicePosition = positions[1];
      } else if (window.location.pathname.startsWith("/stacks")) {
        state.contents.dicePosition = positions[2];
        state.projects.dicePosition = positions[3];
        state.about.dicePosition = positions[5];
        if (window.location.pathname === "/stacks") {
          state.stacks.dicePosition = positions[1];
          state.card.visibility = "hidden";
          state.card.opacity = 0;
        } else {
          state.stacks.dicePosition = focusedPosition;
          state.card.visibility = "visible";
          state.card.opacity = 1;
        }
      } else if (window.location.pathname.startsWith("/projects")) {
        state.about.dicePosition = positions[5];
        state.stacks.dicePosition = positions[3];
        state.contents.dicePosition = positions[0];
        if (window.location.pathname === "/projects") {
          state.projects.dicePosition = positions[1];
          state.card.visibility = "hidden";
          state.card.opacity = 0;
        } else {
          state.projects.dicePosition = focusedPosition;
          state.card.visibility = "visible";
          state.card.opacity = 1;
        }
      } else if (window.location.pathname.startsWith("/about")) {
        state.stacks.dicePosition = positions[0];
        state.contents.dicePosition = positions[4];
        state.projects.dicePosition = positions[2];
        if (window.location.pathname === "/about") {
          state.about.dicePosition = positions[1];
          state.card.visibility = "hidden";
          state.card.opacity = 0;
        } else {
          state.about.dicePosition = focusedPosition;
          state.card.visibility = "visible";
          state.card.opacity = 1;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  rotateContents,
  setFocus,
  setPosition,
  setZoom,
  setVisibility,
  rotatePosition,
  checkUrl,
} = spaceSlice.actions;

export default spaceSlice.reducer;
