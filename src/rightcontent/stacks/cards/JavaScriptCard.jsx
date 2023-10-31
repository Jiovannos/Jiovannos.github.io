import React from "react";
import css from "./styles.module.css";
import { useDispatch } from "react-redux";
import { filterProjects, setSearchWord } from "../../../redux/searchSlice";
import { useNavigate } from "react-router";

export default function PythonCard(props) {
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
        <h1 className={css.title}>JavaScript</h1>
        <p className={css.shortDescription}>
          FrontEnd (React.js) - Backend (Express.js) - FullStack (MERN).
        </p>
        <div className={css.section}>
          <div className={css.lowerTitle}>Projects:</div>
          <div
            className={css.projectLink}
            onClick={() => {
              navigate("/projects/chordpal");
            }}
          >
            ChordPal
          </div>

          <div
            className={css.projectLink}
            onClick={() => {
              navigate("/projects/happyjobfinder");
            }}
          >
            Happy Job Finder
          </div>
          <div
            className={css.projectLink}
            onClick={() => {
              navigate("/projects/morethanbirthdays");
            }}
          >
            More Than Birthdays
          </div>
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
              navigate("/projects/bodypercussion");
            }}
          >
            Body Percussion
          </div>
        </div>
        <p className={css.description}>
          All the Front End happens with JavaScript (or TypeScript). I have used
          vanilla JavaScript at start but later did everything with React in the
          Front End. Half of the projects use Express in the Back End. I have
          also worked with Node.js and MongoDB extensively.
        </p>

        <div className={css.hashTags}>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #FrontEnd
          </div>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #TypeScript
          </div>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #Node.js
          </div>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #Express.js
          </div>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #React.js
          </div>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #Three.js
          </div>
        </div>
      </div>
    </>
  );
}
