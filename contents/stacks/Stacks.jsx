import React from "react";
import css from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  rotateContents,
  setPosition,
  setVisibility,
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
    dispatch(
      setPosition({ category: "stacks", position: { x: -2, y: 0, z: -8 } })
    );
  };

  return (
    <div
      className={css.categories}
      style={{
        visibility: stacksState.visibility,
        opacity: stacksState.opacity,
      }}
    >
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
