import React from "react";
import css from "./styles.module.css";
// import myText from "../sample/PortfolioCodeText";
import { useDispatch } from "react-redux";
import { setVisibility, rotatePosition } from "../../../redux/spaceSlice";
import { CopyBlock, dracula } from "react-code-blocks";
import { useNavigate } from "react-router";

export default function FrontEndCard(props) {
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
        <h1 className={css.title}>Front End</h1>
        <p className={css.shortDescription}>
          JavaScript and React.js - HTML and CSS.
        </p>
        <div className={css.section}>
          <div className={css.lowerTitle}>Projects:</div>
          <div
            className={css.projectLink}
            onClick={() => {
              navigate("/projects/portfolio");
            }}
          >
            Portfolio
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
              navigate("/projects/minmax");
            }}
          >
            Minnie and Maxx
          </div>
        </div>
        <p className={css.description}>
          Most of the front end work done has been for Web Applications using
          the React framework. Of course JavaScript, HTML and CSS are also used.
        </p>

        <div className={css.hashTags}>
          <div className={css.tag}>#JavaScript</div>
          <div className={css.tag}>#React</div>
          <div className={css.tag}>#Three.js</div>
          <div className={css.tag}>#HTML</div>
          <div className={css.tag}>#CSS</div>
          <div className={css.tag}>#Redux</div>
          <div className={css.tag}>#REST</div>
        </div>
      </div>
    </>
  );
}
