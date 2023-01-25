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
        <h1 className={css.title}>Data</h1>
        <p className={css.shortDescription}>
          Backend - Data Engineering - Data Analysis - Data Visualization -
          Business Logic.
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
          My native language. I think in Python. Whenever there is business
          logic, there is Python. Almost all the completed projects are using
          Python at some extend. All the side projects and everyday scripts are
          written in Python. Even the communication with databases is done in
          Python libraries.
        </p>

        <div className={css.hashTags}>
          <div className={css.tag}>#Automation</div>
          <div className={css.tag}>#WebScrapping</div>
          <div className={css.tag}>#Backend</div>
          <div className={css.tag}>#DataEngineering</div>
          <div className={css.tag}>#DataAnalysis</div>
          <div className={css.tag}>#Flask</div>
          <div className={css.tag}>#Pandas</div>
          <div className={css.tag}>#Numpy</div>
          <div className={css.tag}>#Selenium</div>
          <div className={css.tag}>#Matplotlib</div>
          <div className={css.tag}>#MachineLearning</div>
          <div className={css.tag}>#OpenCV</div>
        </div>
      </div>
    </>
  );
}
