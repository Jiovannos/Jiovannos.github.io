import React from "react";
import css from "./styles.module.css";
import { useDispatch } from "react-redux";
import { filterProjects, setSearchWord } from "../../../redux/searchSlice";
import { useNavigate } from "react-router";

export default function SQLCard(props) {
  const navigate = useNavigate();
  const closeCard = () => {
    navigate("/stacks");
  };
  const dispatch = useDispatch();
  const handlehashTags = (tag) => {
    dispatch(setSearchWord(tag));
    dispatch(filterProjects(tag));
    navigate("/projects");
  };
  return (
    <>
      <div className={css.container}>
        <button className={css.xButton} onClick={closeCard}>
          x
        </button>
        <h1 className={css.title}>SQL</h1>
        <p className={css.shortDescription}>MySQL - SQLite</p>
        <div className={css.section}>
          <div className={css.lowerTitle}>Projects:</div>
          <div
            className={css.projectLink}
            onClick={() => {
              navigate("/projects/saasplatform");
            }}
          >
            SaaS Platform
          </div>
          <div
            className={css.projectLink}
            onClick={() => {
              navigate("/projects/minnieandmaxx");
            }}
          >
            Minnie and Maxx
          </div>
          <div
            className={css.projectLink}
            onClick={() => {
              navigate("/projects/procurement");
            }}
          >
            Procurement Analysis
          </div>

          {/* <div
            className={css.projectLink}
            onClick={() => {
              navigate("/projects/bigfatdata");
            }}
          >
            Big Fat Data
          </div> */}
        </div>
        <p className={css.description}>
          Almost half of my applications use SQL as their main database.
        </p>

        <div className={css.hashTags}>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #MySQL
          </div>
          {/* <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #SQLite
          </div> */}
        </div>
      </div>
    </>
  );
}
