import React from "react";
import css from "./styles.module.css";
import { useNavigate } from "react-router";

export default function DataCard(props) {
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
          Data Engineering - Data Analysis - Data Visualization.
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
          Most of the complete projects have somekind of data handling. Plus
          there are some pure data-analysis projects.
        </p>

        <div className={css.hashTags}>
          <div className={css.tag}>#Python</div>
          <div className={css.tag}>#Pandas</div>
          <div className={css.tag}>#Numpy</div>
          <div className={css.tag}>#scikit-learn</div>
          <div className={css.tag}>#SQL</div>
          <div className={css.tag}>#MySQL</div>
          <div className={css.tag}>#NoSQL</div>
          <div className={css.tag}>#MongoDB</div>
          <div className={css.tag}>#Neo4j</div>
          <div className={css.tag}>#ETL</div>
          <div className={css.tag}>#Matplotlib</div>
          <div className={css.tag}>#Tableau</div>
        </div>
      </div>
    </>
  );
}
