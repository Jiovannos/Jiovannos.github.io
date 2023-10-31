import React from "react";
import css from "./styles.module.css";
import myText from "../sample/happyJobFinderCodeText";
import { useDispatch } from "react-redux";
import { filterProjects, setSearchWord } from "../../../redux/searchSlice";
import { CopyBlock, dracula } from "react-code-blocks";
import { useNavigate } from "react-router";

export default function HappyJobFinderCard(props) {
  const [display, setDisplay] = React.useState("none");
  const navigate = useNavigate();
  const closeCard = () => {
    navigate("/projects");
  };
  //Toggles Code Display Display on and off
  const toggleCode = () => {
    if (display === "none") {
      setDisplay("flex");
    } else {
      setDisplay("none");
    }
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
        <h1 className={css.title}>Happy Job Finder</h1>
        <p className={css.shortDescription}>
          Web Application - JavaScript - PostgreSQL - Next.js - React.js
        </p>
        <div className={css.section}>
          <div className={css.lowerTitle}>Website:</div>
          <a
            className={css.link}
            href={"https://www.happyjobfinder.net"}
            target="_blank"
            rel="noopener noreferrer"
          >
            happyjobfinder.net
          </a>
        </div>

        <p className={css.description}>
          A Web application that explores a concept of comparing jobs in respect
          to happiness generated through it and not money.
        </p>

        <div className={css.description}>
          <b>Challenges: </b>A simple, CRUD, analysis application. The whole
          application was a challenge I put to myself, to complete it from
          scratch in 2 days. Somewhat unrealistic challenge as it took me 7 days
          (with the deployment)!!!
        </div>

        <div className={css.showCode} onClick={toggleCode}>
          Show Sample Code
        </div>
        <div className={css.code} style={{ display: display }}>
          <div className={css.lowerTitle}>CustomSlider.jsx</div>
          <div className={css.codeBlock}>
            <CopyBlock
              text={myText}
              language={"javascript"}
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
              codeBlock
              wrapLines
            />
          </div>
        </div>
        <div className={css.hashTags}>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #JavaScript
          </div>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #React
          </div>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #Next
          </div>

          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #PostgreSQL
          </div>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #Redux
          </div>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #CSS
          </div>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #UserManagement
          </div>

          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #AWS
          </div>
        </div>
      </div>
    </>
  );
}
