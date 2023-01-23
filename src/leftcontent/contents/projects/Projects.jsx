import React from "react";
import css from "./styles.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkUrl } from "../../../redux/spaceSlice";
import { useNavigate } from "react-router";
import { setFocus, rotateContents } from "../../../redux/spaceSlice";

export default function Projects(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const spaceState = useSelector((state) => state.space);
  const searchState = useSelector((state) => state.search);
  const visible = searchState.displayFields;

  useEffect(() => {
    dispatch(checkUrl());
  }, [window.location.pathname]);

  return (
    <div className={css.categories}>
      <h1 className={css.title}>Projects</h1>
      <li
        className={css.category}
        onMouseOver={() => {
          dispatch(rotateContents({ category: "projects", rotation: 1 }));
          dispatch(setFocus({ category: "projects", focused: true }));
        }}
        onMouseLeave={() => {
          if (window.location.pathname === "/projects")
            dispatch(setFocus({ category: "projects", focused: false }));
        }}
        onClick={() => {
          navigate("/projects/portfolio");
        }}
        style={{ display: visible.portfolio }}
      >
        Portfolio Project
      </li>
      <li
        className={css.category}
        onMouseOver={() => {
          dispatch(rotateContents({ category: "projects", rotation: 2 }));
          dispatch(setFocus({ category: "projects", focused: true }));
        }}
        onClick={() => {
          navigate("/projects/saasplatform");
        }}
        style={{ display: visible.saas }}
      >
        SaaS Platform
      </li>
      <li
        className={css.category}
        onMouseOver={() => {
          dispatch(rotateContents({ category: "projects", rotation: 3 }));
          dispatch(setFocus({ category: "projects", focused: true }));
        }}
        onMouseLeave={() => {
          if (window.location.pathname === "/projects")
            dispatch(setFocus({ category: "projects", focused: false }));
        }}
        onClick={() => {
          navigate("/projects/minnieandmaxx");
        }}
        style={{ display: visible.minmax }}
      >
        Minnie and Maxx
      </li>
      <li
        className={css.category}
        onMouseOver={() => {
          dispatch(rotateContents({ category: "projects", rotation: 4 }));
          dispatch(setFocus({ category: "projects", focused: true }));
        }}
        onClick={() => {
          navigate("/projects/minnieandmaxx");
        }}
        style={{ display: visible.weight }}
      >
        Weight Tracker
      </li>
      <li
        className={css.category}
        onMouseOver={() => {
          dispatch(rotateContents({ category: "projects", rotation: 5 }));
          dispatch(setFocus({ category: "projects", focused: true }));
        }}
        onClick={() => {
          navigate("/projects/minnieandmaxx");
        }}
        style={{ display: visible.mtgScrapper }}
      >
        Magic Scrapper
      </li>
      <li
        className={css.category}
        onMouseOver={() => {
          dispatch(rotateContents({ category: "projects", rotation: 6 }));
          dispatch(setFocus({ category: "projects", focused: true }));
        }}
        onClick={() => {
          navigate("/projects/eyemouse");
        }}
        style={{ display: visible.eyeMouse }}
      >
        Eye Mouse
      </li>
      <li
        className={css.category}
        onMouseOver={() => {
          dispatch(rotateContents({ category: "projects", rotation: 7 }));
          dispatch(setFocus({ category: "projects", focused: true }));
        }}
        onMouseLeave={() => {
          if (window.location.pathname === "/projects")
            dispatch(setFocus({ category: "projects", focused: false }));
        }}
        onClick={() => {
          navigate("/projects/procurementanalysis");
        }}
        style={{ display: visible.procurement }}
      >
        Procurement Analysis
      </li>
      <li
        className={css.category}
        onMouseOver={() => {
          dispatch(rotateContents({ category: "projects", rotation: 8 }));
          dispatch(setFocus({ category: "projects", focused: true }));
        }}
        onMouseLeave={() => {
          if (window.location.pathname === "/projects")
            dispatch(setFocus({ category: "projects", focused: false }));
        }}
        onClick={() => {
          navigate("/projects/chordcalculator");
        }}
        style={{ display: visible.chords }}
      >
        Chord Calculator
      </li>
      <li
        className={css.category}
        onMouseOver={() => {
          dispatch(rotateContents({ category: "projects", rotation: 9 }));
          dispatch(setFocus({ category: "projects", focused: true }));
        }}
        onClick={() => {
          navigate("/projects/bodypercussion");
        }}
        style={{ display: visible.bodyPercussion }}
      >
        Body Percussion
      </li>
      <li
        className={css.category}
        onMouseOver={() => {
          dispatch(rotateContents({ category: "projects", rotation: 10 }));
          dispatch(setFocus({ category: "projects", focused: true }));
        }}
        onMouseLeave={() => {
          if (window.location.pathname === "/projects")
            dispatch(setFocus({ category: "projects", focused: false }));
        }}
        onClick={() => {
          navigate("/projects/bigfatdata");
        }}
        style={{ display: visible.bigFatData }}
      >
        Big Fat Data
      </li>
    </div>
  );
}
