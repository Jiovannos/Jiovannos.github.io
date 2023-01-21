import React from "react";
import css from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  rotateContents,
  setFocus,
  setPosition,
  setVisibility,
  checkUrl,
} from "../../../redux/spaceSlice";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Categories(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const spaceState = useSelector((state) => state.space);
  const contentsState = spaceState.contents;
  function handleRotation(cat) {
    dispatch(rotateContents(cat));
  }
  const openCard = () => {
    dispatch(
      setVisibility({
        category: "card",
        visibility: "visible",
        opacity: 1,
      })
    );
  };
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
          handleRotation({ rotation: "about" });
          dispatch(setFocus({ category: "contents", focused: true }));
        }}
        onMouseLeave={() => {
          handleRotation({ rotation: "about" });
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
          handleRotation({ rotation: "stacks" });
          dispatch(setFocus({ category: "contents", focused: true }));
        }}
        onMouseLeave={() => {
          handleRotation({ rotation: "stacks" });
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
          handleRotation({ rotation: "projects" });
          dispatch(setFocus({ category: "contents", focused: true }));
        }}
        onMouseLeave={() => {
          handleRotation({ rotation: "projects" });
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
