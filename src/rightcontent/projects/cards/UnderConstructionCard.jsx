import React from "react";
import css from "./styles.module.css";
// import myText from "../sample/PortfolioCodeText";
// import { CopyBlock, dracula } from "react-code-blocks";
import { useNavigate } from "react-router";

export default function UnderConstructionCard(props) {
  // const [display, setDisplay] = React.useState("none");
  const navigate = useNavigate();
  const closeCard = () => {
    navigate("/projects");
  };

  return (
    <>
      <div className={css.container}>
        <button className={css.xButton} onClick={closeCard}>
          x
        </button>
        <h1 className={css.title}>Under Construction</h1>
        <p className={css.shortDescription}>Coming Soon...</p>
        <p className={css.description}></p>
        <p className={css.description}>
          Awaitting for the containerization and deployment of the project.
        </p>
      </div>
    </>
  );
}
