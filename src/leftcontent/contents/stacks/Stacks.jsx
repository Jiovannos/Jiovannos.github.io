import React from "react";
import { useEffect } from "react";
import css from "./styles.module.css";
import { useDispatch } from "react-redux";
import { checkUrl, setFocus, rotateContents } from "../../../redux/spaceSlice";
import { useNavigate } from "react-router";

export default function Stacks(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Checks the current URL and sets the state accordingly
  useEffect(() => {
    dispatch(checkUrl());
  }, [window.location.pathname]);

  return (
    <div className={css.categories}>
      <h1 className={css.title}>Stacks</h1>
      <li
        className={css.category}
        onClick={() => {
          navigate("/stacks/frontend");
        }}
        onMouseOver={() => {
          dispatch(rotateContents({ category: "stacks", rotation: 1 }));
          dispatch(setFocus({ category: "stacks", focused: true }));
        }}
        onMouseLeave={() => {
          if (window.location.pathname === "/stacks")
            dispatch(setFocus({ category: "stacks", focused: false }));
        }}
      >
        FrontEnd
      </li>
      <li
        className={css.category}
        onClick={() => {
          navigate("/stacks/backend");
        }}
        onMouseOver={() => {
          dispatch(rotateContents({ category: "stacks", rotation: 2 }));
          dispatch(setFocus({ category: "stacks", focused: true }));
        }}
        onMouseLeave={() => {
          if (window.location.pathname === "/stacks")
            dispatch(setFocus({ category: "stacks", focused: false }));
        }}
      >
        BackEnd
      </li>
      <li
        className={css.category}
        onClick={() => {
          navigate("/stacks/data");
        }}
        onMouseOver={() => {
          dispatch(rotateContents({ category: "stacks", rotation: 3 }));
          dispatch(setFocus({ category: "stacks", focused: true }));
        }}
        onMouseLeave={() => {
          if (window.location.pathname === "/stacks")
            dispatch(setFocus({ category: "stacks", focused: false }));
        }}
      >
        Data
      </li>
      <li
        className={css.category}
        onClick={() => {
          navigate("/stacks/python");
        }}
        onMouseOver={() => {
          dispatch(rotateContents({ category: "stacks", rotation: 4 }));
          dispatch(setFocus({ category: "stacks", focused: true }));
        }}
        onMouseLeave={() => {
          if (window.location.pathname === "/stacks")
            dispatch(setFocus({ category: "stacks", focused: false }));
        }}
      >
        Python
      </li>
      <li
        className={css.category}
        onClick={() => {
          navigate("/stacks/javascript");
        }}
        onMouseOver={() => {
          dispatch(rotateContents({ category: "stacks", rotation: 5 }));
          dispatch(setFocus({ category: "stacks", focused: true }));
        }}
        onMouseLeave={() => {
          if (window.location.pathname === "/stacks")
            dispatch(setFocus({ category: "stacks", focused: false }));
        }}
      >
        JavaScript
      </li>
      <li
        className={css.category}
        onClick={() => {
          navigate("/stacks/sql");
        }}
        onMouseOver={() => {
          dispatch(rotateContents({ category: "stacks", rotation: 6 }));
          dispatch(setFocus({ category: "stacks", focused: true }));
        }}
        onMouseLeave={() => {
          if (window.location.pathname === "/stacks")
            dispatch(setFocus({ category: "stacks", focused: false }));
        }}
      >
        SQL
      </li>
      <li
        className={css.category}
        onClick={() => {
          navigate("/stacks/nosql");
        }}
        onMouseOver={() => {
          dispatch(rotateContents({ category: "stacks", rotation: 7 }));
          dispatch(setFocus({ category: "stacks", focused: true }));
        }}
        onMouseLeave={() => {
          if (window.location.pathname === "/stacks")
            dispatch(setFocus({ category: "stacks", focused: false }));
        }}
      >
        NoSQL
      </li>
      <li
        className={css.category}
        onClick={() => {
          navigate("/stacks/cloud");
        }}
        onMouseOver={() => {
          dispatch(rotateContents({ category: "stacks", rotation: 8 }));
          dispatch(setFocus({ category: "stacks", focused: true }));
        }}
        onMouseLeave={() => {
          if (window.location.pathname === "/stacks")
            dispatch(setFocus({ category: "stacks", focused: false }));
        }}
      >
        Cloud
      </li>
    </div>
  );
}
