import React from "react";
import css from "./styles.module.css";
import myText from "../sample/ChordPalCodeText";
import { useDispatch } from "react-redux";
import { filterProjects, setSearchWord } from "../../../redux/searchSlice";
import { CopyBlock, dracula } from "react-code-blocks";
import { useNavigate } from "react-router";

export default function ChordPalCard(props) {
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
        <h1 className={css.title}>ChordPal</h1>

        <p className={css.shortDescription}>
          Web Application - JavaScript - MERN (MongoDB - Express.js - React.js
          Node.js)
        </p>
        <div className={css.section}>
          <div className={css.lowerTitle}>Website:</div>
          <a
            className={css.link}
            href={"http://chord-pal.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            chord-pal.com
          </a>
        </div>

        <p className={css.description}>
          A Web Application for musicians to create and share song chords,
          lyrics and tabs. Plus algorithmic analysis of what chords may be
          present on a song and scale helper tools to make editing songs easy.
        </p>

        <div className={css.description}>
          <b>Challenges: </b>
          Most challenges were in business logic, rather than development. The
          biggest challenge was the algorithmic analysis of chords mostly due to
          the knowledge I needed to acquire in music theory. Thankfully, as a
          part-time musician, I was half way there.
        </div>

        <div className={css.showCode} onClick={toggleCode}>
          Show Sample Code
        </div>
        <div className={css.code} style={{ display: display }}>
          <div className={css.lowerTitle}>Song.jsx</div>
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
            #Express
          </div>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #Node
          </div>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #MongoDB
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
            #Music
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
            #GraphQL
          </div>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #AWS
          </div>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #Docker
          </div>
        </div>
      </div>
    </>
  );
}
