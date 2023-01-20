import React from "react";
import css from "./styles.module.css";
import myText from "../sample/PortfolioCodeText";
import { useDispatch } from "react-redux";
import { setVisibility, rotatePosition } from "../../../redux/spaceSlice";
import { CopyBlock, dracula } from "react-code-blocks";
import { useNavigate } from "react-router";

export default function PortfolioCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const closeCard = () => {
    dispatch(
      setVisibility({ category: "card", visibility: "hidden", opacity: 0 })
    );
    dispatch(rotatePosition({ rotateTo: "projects" }));
    navigate("/");
  };
  return (
    <>
      <div className={css.container}>
        <button className={css.xButton} onClick={closeCard}>
          x
        </button>
        <h1 className={css.title}>Portfolio Project</h1>
        <p className={css.shortDescription}>
          FrontEnd Web Application - React and Three.js.
        </p>
        <div className={css.section}>
          <div className={css.lowerTitle}>Link:</div>
          <a className={css.link} href={"http://localhost:3006/"}>
            http://localhost:3006/
          </a>
        </div>
        <p className={css.description}>
          This is a web application to showcase my portfolio. The idea was
          inspired from the classic Pen-n-Paper RPGs where the dice represent
          the enviromental factors contributing to a person't skills.
        </p>
        <div className={css.section}>
          <div className={css.lowerTitle}>Challenges:</div>
          <div className={css.description}>
            It was the first time dealing with 3D animation. Calculating
            geometry plus nessecary rotations of the planes was a bit tricky.
          </div>
        </div>
        <div className={css.section}>
          <div className={css.lowerTitle}>Sample Code:</div>
          <div className={css.description}>DiceGlb.jsx</div>
        </div>
        <div className={css.code}>
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
      </div>
      <div className={css.hashTags}>
        <div className={css.tag}>#JavaScript</div>
        <div className={css.tag}>#React</div>
        <div className={css.tag}>#Three.js</div>
        <div className={css.tag}>#HTML</div>
        <div className={css.tag}>#CSS</div>
        <div className={css.tag}>#3DAnimation</div>
        <div className={css.tag}>#Redux</div>
      </div>
    </>
  );
}
