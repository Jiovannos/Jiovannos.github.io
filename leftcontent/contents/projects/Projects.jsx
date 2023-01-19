import React from "react";
import css from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  rotateContents,
  setPosition,
  setVisibility,
} from "../../../redux/spaceSlice";
import { useNavigate } from "react-router";

export default function Projects(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const spaceState = useSelector((state) => state.space);
  const searchState = useSelector((state) => state.search);
  const visible = searchState.displayFields;
  const projectsState = spaceState.projects;
  const openCard = () => {
    dispatch(
      setVisibility({
        category: "card",
        visibility: "visible",
        opacity: 1,
      })
    );
    dispatch(
      setPosition({ category: "projects", position: { x: -2, y: 0, z: -8 } })
    );
  };
  console.log(visible);

  return (
    <div
      className={css.categories}
      style={{
        visibility: projectsState.visibility,
        opacity: projectsState.opacity,
      }}
    >
      <h1 className={css.title}>Projects</h1>
      <li
        className={css.category}
        onClick={() => {
          openCard();
          navigate("/Portfolio");
        }}
        style={{ display: visible.portfolio }}
      >
        Portfolio Project
      </li>
      <li
        className={css.category}
        style={{ display: visible.saas }}
        onClick={openCard}
      >
        SaaS Platform
      </li>
      <li
        className={css.category}
        style={{ display: visible.minmax }}
        onClick={openCard}
      >
        Minnie and Maxx
      </li>
      <li
        className={css.category}
        style={{ display: visible.weight }}
        onClick={openCard}
      >
        Weight Tracker
      </li>
      <li
        className={css.category}
        style={{ display: visible.mtgScrapper }}
        onClick={openCard}
      >
        Magic Scrapper
      </li>
      <li
        className={css.category}
        style={{ display: visible.eyeMouse }}
        onClick={openCard}
      >
        Eye Mouse
      </li>
      <li
        className={css.category}
        style={{ display: visible.procurement }}
        onClick={openCard}
      >
        Procurement Analysis
      </li>
      <li
        className={css.category}
        style={{ display: visible.chords }}
        onClick={openCard}
      >
        Scale Calculator
      </li>
      <li
        className={css.category}
        style={{ display: visible.bodyPercussion }}
        onClick={openCard}
      >
        Body Percussion
      </li>
      <li
        className={css.category}
        style={{ display: visible.bigFatData }}
        onClick={openCard}
      >
        Big Fat Data
      </li>
    </div>
  );
}
