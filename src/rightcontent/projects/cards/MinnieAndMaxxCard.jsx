import React from "react";
import css from "./styles.module.css";
import myText from "../sample/MinnieAndMaxxCodeText";
import { CopyBlock, dracula } from "react-code-blocks";
import { useNavigate } from "react-router";

export default function MinnieAndMaxxCard(props) {
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
          FullStack Web Application - Python - TypeScript - MongoDB - React -
          Flask
        </p>
        <div className={css.section}>
          <div className={css.lowerTitle}>Website:</div>
          <div className={css.link}>Full Content not ready yet</div>
        </div>
        <div className={css.section}>
          <div className={css.lowerTitle}>Preview:</div>
          <a
            className={css.link}
            href={"https://i.ibb.co/WgWX8s5/Minnie-And-Maxx.png"}
            target="_blank"
            rel="noreferrer"
          >
            Minnie and Maxx (Statistical Analysis)
          </a>
        </div>
        <p className={css.description}>
          This is a side project I have been working on. It is a web application
          that creates analytics for Dungeons and Dragons. Only 3/5 Main Pages
          are ready. It uses Flask as a Backend, React as a Frontend and MongoDB
          as a database.
        </p>

        <div className={css.description}>
          <b>Challenges: </b>
          Cleary the app's main challenge is the whole math and statistical
          analysis, as it has to depict complex situation combinations in a
          simple, graphical way.
        </div>

        <div className={css.showCode} onClick={toggleCode}>
          Show Sample Code
        </div>
        <div className={css.code} style={{ display: display }}>
          <div className={css.lowerTitle}>Statistics_Class.ts</div>
          <div className={css.codeBlock}>
            <CopyBlock
              text={myText}
              language={"typescript"}
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
              codeBlock
              wrapLines
            />
          </div>
        </div>
        <div className={css.hashTags}>
          <div className={css.tag}>#FullStack</div>
          <div className={css.tag}>#TypeScript</div>
          <div className={css.tag}>#JavaScript</div>
          <div className={css.tag}>#React.js</div>
          <div className={css.tag}>#Python</div>
          <div className={css.tag}>#Flask</div>
          <div className={css.tag}>#MongoDB</div>
          <div className={css.tag}>#HTML</div>
          <div className={css.tag}>#CSS</div>
          <div className={css.tag}>#Redux</div>
          <div className={css.tag}>#Docker</div>
          <div className={css.tag}>#Statistics</div>
          <div className={css.tag}>#DataAnalysis</div>
        </div>
      </div>
    </>
  );
}
