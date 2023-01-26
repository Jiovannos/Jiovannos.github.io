import React from "react";
import css from "./styles.module.css";
import myText from "../sample/WeightTrackerCodeText";
import { CopyBlock, dracula } from "react-code-blocks";
import { useNavigate } from "react-router";

export default function WeightTrackerCard(props) {
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

  return (
    <>
      <div className={css.container}>
        <button className={css.xButton} onClick={closeCard}>
          x
        </button>
        <h1 className={css.title}>SaaS Platform</h1>
        <p className={css.shortDescription}>
          Desktop Application - Python - GUI - MySQL
        </p>

        <p className={css.description}>
          A relatively small project where I created a GUI application that
          allows users to track their weight and keep records, while making
          Graphs to visualize progress. It is intended to move to a web app in
          the future.
        </p>

        <div className={css.description}>
          <b>Challenges: </b>
          Fairly simple project, with no real challenges.
        </div>

        <div className={css.showCode} onClick={toggleCode}>
          Show Sample Code
        </div>
        <div className={css.code} style={{ display: display }}>
          <div className={css.lowerTitle}>Main_Classes.py</div>
          <div className={css.codeBlock}>
            <CopyBlock
              text={myText}
              language={"python"}
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
              codeBlock
              wrapLines
            />
          </div>
        </div>
        <div className={css.hashTags}>
          <div className={css.tag}>#GUI</div>
          <div className={css.tag}>#Python</div>
          <div className={css.tag}>#MySQL</div>
        </div>
      </div>
    </>
  );
}
