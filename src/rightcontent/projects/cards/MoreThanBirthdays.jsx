import React from "react";
import css from "./styles.module.css";
import myText from "../sample/MoreThanBirthdayCodeTexts";
import { CopyBlock, dracula } from "react-code-blocks";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { filterProjects, setSearchWord } from "../../../redux/searchSlice";
export default function MoreThanBirthdaysCard(props) {
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
        <h1 className={css.title}>More Than Birthdays</h1>
        <p className={css.shortDescription}>
          Web Application - JavaScript - React - NextJS
        </p>
        <div className={css.section}>
          <div className={css.lowerTitle}>Website:</div>
          <a
            className={css.link}
            href={"https://more-than-birthday-403617.oa.r.appspot.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            morethanbirthdays.com
          </a>
        </div>

        <p className={css.description}>
          A simple static web application that challenges the way we celebrate.
        </p>

        <div className={css.description}>
          <b>Challenges: </b>
          An overall straightforward app with no real challenges.
        </div>

        <div className={css.showCode} onClick={toggleCode}>
          Show Sample Code
        </div>
        <div className={css.code} style={{ display: display }}>
          <div className={css.lowerTitle}>Capture_Class.py</div>
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
        </div>
      </div>
    </>
  );
}
