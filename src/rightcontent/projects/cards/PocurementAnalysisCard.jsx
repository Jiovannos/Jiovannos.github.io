import React from "react";
import css from "./styles.module.css";
import myText from "../sample/EyeMouseCodeText";
import { CopyBlock, dracula } from "react-code-blocks";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { filterProjects, setSearchWord } from "../../../redux/searchSlice";
export default function PocurementAnalysisCard(props) {
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
        <h1 className={css.title}>Procurement Analysis</h1>
        <p className={css.shortDescription}>Desktop Application - Python</p>

        <p className={css.description}>
          This is one of the first projects I worked on in Python. It aims to
          demistify the procurement process in the public works bidding sector.
          The results were suprising good and the project was a success. This
          project made me fall in love with data analysis.
        </p>

        <div className={css.description}>
          <b>Challenges: </b>
          It was an overall challenging project because I had to fit a curve in
          a multi-parameter model. Thankfully my mastery of the real problem I
          was trying to solve helped a lot.
        </div>

        <div className={css.hashTags}>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #Python
          </div>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #Numpy
          </div>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #Pandas
          </div>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #Statistics
          </div>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #MachineLearning
          </div>
        </div>
      </div>
    </>
  );
}
