import React from "react";
import css from "./styles.module.css";
import myText from "../sample/EyeMouseCodeText";
import { CopyBlock, dracula } from "react-code-blocks";
import { useNavigate } from "react-router";

export default function EyeMouseCard(props) {
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
          Desktop Application - Python - GUI - OpenCV - TensorFlow
        </p>

        <p className={css.description}>
          An ambitious project that failed to bear fruits. The goal was to use
          the camera to track my eye movements and use that to control the
          mouse. The ultimate goal was to not only move the mouse, but rather
          understand what I wanted to do, based on what I was looking in the
          screen. The project was abandoned due to the lack of accuracy of the
          eye tracking but it will be revisited in the future when I finish my
          masters on AI and maybe get a look from a different scope.
        </p>

        <div className={css.description}>
          <b>Challenges: </b>
          It has recorded countless camera-hours of me while I was coding or
          surfing the web and aligned them with the recordings of my screen's
          state at the momment. The problem was that I started with 2 screens,
          then they became 3, then the 1 turned vertical, so pixel mapping was a
          frustration. I also had to deal with the fact that the camera was not
          always in the same position, so I had to use calibration to make sure
          that the eye tracking was accurate. Also, something I was not aware
          before is that eyes flicker when they are looking at the same spot.
        </div>

        <div className={css.showCode} onClick={toggleCode}>
          Show Sample Code
        </div>
        <div className={css.code} style={{ display: display }}>
          <div className={css.lowerTitle}>Capture_Class.py</div>
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
          <div className={css.tag}>#OpenCV</div>
          <div className={css.tag}>#TensorFlow</div>
        </div>
      </div>
    </>
  );
}
