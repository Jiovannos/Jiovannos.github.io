import React from "react";
import css from "./styles.module.css";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  setVisibility,
  checkUrl,
  rotateContents,
  setFocus,
} from "../../../redux/spaceSlice";
import { useNavigate } from "react-router";

export default function About(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    <div className={css.categories}>
      <h1 className={css.title}>About</h1>
      <li
        className={css.category}
        onClick={() => {
          openCard();
          navigate("/about/bio");
        }}
        onMouseOver={() => {
          dispatch(rotateContents({ category: "about", rotation: 1 }));
          dispatch(setFocus({ category: "about", focused: true }));
        }}
        onMouseLeave={() => {
          if (window.location.pathname === "/about")
            dispatch(setFocus({ category: "about", focused: false }));
        }}
      >
        Bio
      </li>
      <li
        className={css.category}
        onClick={() => {
          openCard();
          navigate("/about/career");
        }}
        onMouseOver={() => {
          dispatch(rotateContents({ category: "about", rotation: 2 }));
          dispatch(setFocus({ category: "about", focused: true }));
        }}
        onMouseLeave={() => {
          if (window.location.pathname === "/about")
            dispatch(setFocus({ category: "about", focused: false }));
        }}
      >
        Career
      </li>
    </div>
  );
}
