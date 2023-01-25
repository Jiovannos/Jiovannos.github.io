import React from "react";
import css from "./styles.module.css";

import { useNavigate } from "react-router";

export default function PythonCard(props) {
  const navigate = useNavigate();
  const closeCard = () => {
    navigate("/stacks");
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
              navigate("/projects/weighttracker");
            }}
          >
            Weight Tracker
          </div>
          <div
            className={css.projectLink}
            onClick={() => {
              navigate("/projects/mtgscrapper");
            }}
          >
            Magic Scrapper
          </div>
          <div
            className={css.projectLink}
            onClick={() => {
              navigate("/projects/eyemouse");
            }}
          >
            Eye Mouse
          </div>
          <div
            className={css.projectLink}
            onClick={() => {
              navigate("/projects/procurement");
            }}
          >
            Procurement Analysis
          </div>
          <div
            className={css.projectLink}
            onClick={() => {
              navigate("/projects/chordcalculator");
            }}
          >
            Chord Calculator
          </div>
          <div
            className={css.projectLink}
            onClick={() => {
              navigate("/projects/bodypercussion");
            }}
          >
            Body Percussion
          </div>
          <div
            className={css.projectLink}
            onClick={() => {
              navigate("/projects/bigfatdata");
            }}
          >
            Big Fat Data
          </div>
        </div>
        <p className={css.description}>
          All the Front End happens with JavaScript (or TypeScript). I have used
          vanilla JavaScript at start but later did everything with React in the
          Front End. Half of hte projects use Express in the Back End. I have
          also worked with Node.js and MongoDB extensively.
        </p>

        <div className={css.hashTags}>
          <div className={css.tag}>#FrontEnd</div>
          <div className={css.tag}>#TypeScript</div>
          <div className={css.tag}>#Node.js</div>
          <div className={css.tag}>#Express.js</div>
          <div className={css.tag}>#React.js</div>
          <div className={css.tag}>#Three.js</div>
        </div>
      </div>
    </>
  );
}
