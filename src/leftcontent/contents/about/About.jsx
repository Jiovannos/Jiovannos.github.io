import React from "react";
import css from "./styles.module.css";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  setPosition,
  setVisibility,
  checkUrl,
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
      >
        Bio
      </li>
      <li
        className={css.category}
        onClick={() => {
          openCard();
          navigate("/about/career");
        }}
      >
        Career
      </li>
    </div>
  );
}
