import React from "react";
import css from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  rotateContents,
  setPosition,
  setVisibility,
} from "../../../redux/spaceSlice";
import { useNavigate } from "react-router";

export default function About(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const spaceState = useSelector((state) => state.space);
  const aboutState = spaceState.about;
  const openCard = () => {
    dispatch(
      setVisibility({
        category: "card",
        visibility: "visible",
        opacity: 1,
      })
    );
    dispatch(
      setPosition({ category: "about", position: { x: -5, y: 0, z: -8 } })
    );
  };

  return (
    <div
      className={css.categories}
      style={{
        visibility: aboutState.visibility,
        opacity: aboutState.opacity,
      }}
    >
      <h1 className={css.title}>About</h1>
      <li
        className={css.category}
        onClick={() => {
          openCard();
          navigate("/");
        }}
      >
        Bio
      </li>
      <li className={css.category} onClick={openCard}>
        Career
      </li>
    </div>
  );
}
