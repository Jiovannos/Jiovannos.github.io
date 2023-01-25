import React from "react";
import css from "./styles.module.css";
import { useNavigate } from "react-router";

export default function CloudCard(props) {
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
        <h1 className={css.title}>Cloud</h1>
        <p className={css.shortDescription}>Docker - Google Cloud Platform</p>
        <div className={css.section}>
          <div className={css.lowerTitle}>Projects:</div>
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
          All the projects are dockerized and deployed on Google Cloud Platform.
        </p>

        <div className={css.hashTags}>
          <div className={css.tag}>#Docker</div>
          <div className={css.tag}>#Containers</div>
          <div className={css.tag}>#GCP</div>
        </div>
      </div>
    </>
  );
}
