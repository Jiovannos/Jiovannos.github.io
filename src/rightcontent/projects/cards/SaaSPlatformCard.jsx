import React from "react";
import css from "./styles.module.css";
import myText from "../sample/SaasPlatformCodeText";
import { CopyBlock, dracula } from "react-code-blocks";
import { useNavigate } from "react-router";

export default function SaaSPlatformCard(props) {
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
          FullStack Web Application - Python - JavaScript - MERN Stack (MongoDB
          - Express - React - Node).
        </p>
        <div className={css.section}>
          <div className={css.lowerTitle}>Website:</div>
          <div className={css.link}>Access Not Permitted</div>
        </div>
        <div className={css.section}>
          <div className={css.lowerTitle}>Preview:</div>
          <a
            className={css.link}
            href={"https://i.ibb.co/bKdr3vJ/Saa-SPlatform-Preview.png"}
            target="_blank"
            rel="noreferrer"
          >
            SaaS Platform (First Page)
          </a>
        </div>
        <p className={css.description}>
          This is the main project I have been working on. It is a SaaS platform
          for connecting Construction companies with Material Suppliers and
          Subcontractors. It is almost complete and will be soon released to the
          market. Most of the project is in MERN Stack with the cloud part in
          GCP Dockerized and most of the business logic is done in Python.
        </p>

        <div className={css.description}>
          <b>Challenges: </b>
          This app's main difficulty was extracting data from differently
          formatted PDFs and converting them into a standard format. I used a
          series of techniques including OCR, Regex, and NLP to accomplish this.
        </div>

        <div className={css.showCode} onClick={toggleCode}>
          Show Sample Code
        </div>
        <div className={css.code} style={{ display: display }}>
          <div className={css.lowerTitle}>Scrapper_Class.py</div>
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
          <div className={css.tag}>#FullStack</div>
          <div className={css.tag}>#Python</div>
          <div className={css.tag}>#JavaScript</div>
          <div className={css.tag}>#Express.js</div>
          <div className={css.tag}>#React.js</div>
          <div className={css.tag}>#Node.js</div>
          <div className={css.tag}>#HTML</div>
          <div className={css.tag}>#CSS</div>
          <div className={css.tag}>#MongoDB</div>
          <div className={css.tag}>#MySQL</div>
          <div className={css.tag}>#Selenium</div>
          <div className={css.tag}>#WebScrapping</div>
          <div className={css.tag}>#ETL</div>
          <div className={css.tag}>#OCR</div>
          <div className={css.tag}>#Redux</div>
          <div className={css.tag}>#GCP</div>
          <div className={css.tag}>#Docker</div>
          <div className={css.tag}>#UserManagement</div>
        </div>
      </div>
    </>
  );
}
