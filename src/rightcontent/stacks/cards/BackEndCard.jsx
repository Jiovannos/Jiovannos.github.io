import React from "react";
import css from "./styles.module.css";
// import myText from "../sample/PortfolioCodeText";
import { useDispatch } from "react-redux";
import { setVisibility, rotatePosition } from "../../../redux/spaceSlice";
import { CopyBlock, dracula } from "react-code-blocks";
import { useNavigate } from "react-router";

export default function BackEndCard(props) {
  const [display, setDisplay] = React.useState("none");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const closeCard = () => {
    navigate("/stacks");
  };
  const toggleCode = () => {
    if (display === "none") {
      setDisplay("flex");
    } else {
      setDisplay("none");
    }
  };
  return (
    <>
      <div className={css.container}>
        <button className={css.xButton} onClick={closeCard}>
          x
        </button>
        <h1 className={css.title}>Back End</h1>
        <p className={css.shortDescription}>
          Python and Flask - Node.js and Express.js
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
              navigate("/projects/minmax");
            }}
          >
            Minnie and Maxx
          </div>
        </div>
        <p className={css.description}>
          The Back End is divided equally into Python-Flask projects and
          Node.js-Express.js projects. Most of the business logic is done in
          Python.
        </p>

        <div className={css.hashTags}>
          <div className={css.tag}>#Python</div>
          <div className={css.tag}>#Flask</div>
          <div className={css.tag}>#Node.js</div>
          <div className={css.tag}>#Express.js</div>
          <div className={css.tag}>#REST</div>
          <div className={css.tag}>#SQL</div>
          <div className={css.tag}>#noSQL</div>
        </div>
      </div>
    </>
  );
}
