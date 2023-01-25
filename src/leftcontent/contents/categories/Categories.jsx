import React from "react";
import css from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { rotateContents, setFocus, checkUrl } from "../../../redux/spaceSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Categories(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const spaceState = useSelector((state) => state.space);
  const contentsState = spaceState.contents;
  function handleRotation(cat) {
    dispatch(rotateContents(cat));
  }

  // Checks the current URL and sets the state accordingly
  useEffect(() => {
    dispatch(checkUrl());
  }, [window.location.pathname]);
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
          dispatch(setFocus({ category: "contents", focused: true }));
          handleRotation({ category: "contents", rotation: 1 });
        }}
        onMouseLeave={() => {
          dispatch(setFocus({ category: "contents", focused: false }));
        }}
        onClick={() => {
          navigate("/about");
        }}
      >
        About
      </li>
      <li
        className={css.category}
        onMouseOver={() => {
          dispatch(setFocus({ category: "contents", focused: true }));
          handleRotation({ category: "contents", rotation: 2 });
        }}
        onMouseLeave={() => {
          dispatch(setFocus({ category: "contents", focused: false }));
        }}
        onClick={() => {
          navigate("/stacks");
        }}
      >
        Stacks
      </li>
      <li
        className={css.category}
        onMouseOver={() => {
          dispatch(setFocus({ category: "contents", focused: true }));
          handleRotation({ category: "contents", rotation: 3 });
        }}
        onMouseLeave={() => {
          dispatch(setFocus({ category: "contents", focused: false }));
        }}
        onClick={() => {
          navigate("/projects");
        }}
      >
        Projects
      </li>
      <li
        className={css.category}
        onMouseOver={() => {
          dispatch(setFocus({ category: "contents", focused: true }));
          handleRotation({ category: "contents", rotation: 4 });
        }}
        onMouseLeave={() => {
          dispatch(setFocus({ category: "contents", focused: false }));
        }}
        onClick={() => {
          navigate("/contact");
        }}
      >
        Contact
      </li>
    </div>
  );
}
