import React from "react";
import css from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  rotateContents,
  setFocus,
  setPosition,
  setVisibility,
  rotatePosition,
} from "../../../redux/spaceSlice";
import { useState } from "react";

export default function Categories(props) {
  const dispatch = useDispatch();
  const spaceState = useSelector((state) => state.space);
  const contentsState = spaceState.contents;
  function handleRotation(cat) {
    dispatch(rotateContents(cat));
  }
  const [clicked, setClicked] = useState("noCat");
  const openCard = () => {
    dispatch(
      setVisibility({
        category: "card",
        visibility: "visible",
        opacity: 1,
      })
    );
    dispatch(
      setPosition({ category: "contents", position: { x: -2, y: 0, z: -8 } })
    );
  };

  const toggleCategory = (cat) => {
    dispatch(
      setVisibility({ category: cat, visibility: "visible", opacity: 1 })
    );
    dispatch(
      setVisibility({ category: "contents", visibility: "hidden", opacity: 0 })
    );
  };

  const goToCategory = (cat) => {
    dispatch(rotatePosition({ rotateTo: cat }));
  };

  return (
    <div
      className={css.categories}
      style={{
        visibility: contentsState.visibility,
        opacity: contentsState.opacity,
      }}
    >
      <li
        className={css.category}
        onMouseOver={() => {
          handleRotation({ rotation: "about" });
          dispatch(setFocus({ category: "contents", focused: true }));
        }}
        onMouseLeave={() => {
          handleRotation({ rotation: "about" });
          dispatch(setFocus({ category: "contents", focused: false }));
        }}
        onClick={() => {
          goToCategory("about");
          toggleCategory("about");
        }}
      >
        About
      </li>
      <li
        className={css.category}
        onMouseOver={() => {
          handleRotation({ rotation: "stacks" });
          dispatch(setFocus({ category: "contents", focused: true }));
        }}
        onMouseLeave={() => {
          handleRotation({ rotation: "stacks" });
          dispatch(setFocus({ category: "contents", focused: false }));
        }}
        onClick={() => {
          goToCategory("stacks");
          toggleCategory("stacks");
        }}
      >
        Stacks
      </li>
      <li
        className={css.category}
        onMouseOver={() => {
          handleRotation({ rotation: "projects" });
          dispatch(setFocus({ category: "contents", focused: true }));
        }}
        onMouseLeave={() => {
          handleRotation({ rotation: "projects" });
          dispatch(setFocus({ category: "contents", focused: false }));
        }}
        onClick={() => {
          goToCategory("projects");
          toggleCategory("projects");
        }}
      >
        Projects
      </li>
      <li
        className={css.category}
        onMouseOver={() => {
          handleRotation({ rotation: "contact" });
          dispatch(setFocus({ category: "contents", focused: true }));
        }}
        onMouseLeave={() => {
          handleRotation({ rotation: "contact" });
          dispatch(setFocus({ category: "contents", focused: false }));
        }}
        onClick={() => {
          openCard();
        }}
      >
        Contact
      </li>
    </div>
  );
}
