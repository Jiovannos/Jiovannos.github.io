import React from "react";
import { useEffect, useMemo } from "react";
import css from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setPosition,
  setVisibility,
  checkUrl,
} from "../../../redux/spaceSlice";
// import Contents from "../Contents";
// import { useState } from "react";

export default function Stacks(props) {
  const dispatch = useDispatch();
  const spaceState = useSelector((state) => state.space);
  const stacksState = spaceState.stacks;
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
      <h1 className={css.title} onClick={openCard}>
        Stacks
      </h1>
      <li className={css.category} onClick={openCard}>
        FrontEnd
      </li>
      <li className={css.category} onClick={openCard}>
        BackEnd
      </li>
      <li className={css.category} onClick={openCard}>
        Data Science
      </li>
      <li className={css.category} onClick={openCard}>
        Python
      </li>
      <li className={css.category} onClick={openCard}>
        JavaScript
      </li>
      <li className={css.category} onClick={openCard}>
        SQL
      </li>
      <li className={css.category} onClick={openCard}>
        NoSQL
      </li>
      <li className={css.category} onClick={openCard}>
        Cloud
      </li>
    </div>
  );
}
