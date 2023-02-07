import React from "react";
import css from "./styles.module.css";
import myText from "../sample/EyeMouseCodeText";
import { CopyBlock, dracula } from "react-code-blocks";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { filterProjects, setSearchWord } from "../../../redux/searchSlice";

export default function MagicScrapperCard(props) {
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
        <h1 className={css.title}>Magic Scrapper</h1>
        <p className={css.shortDescription}>
          Desktop Application - Python - GUI - Selenium - MongoDB
        </p>

        <p className={css.description}>
          A Web Scrapping project that uses Selenium to navigate through a
          website and extract data from it. The data is then stored in a MongoDB
          database. Then there are the options to manipulate the user's store
          based on data collected. The project is still in development and the
          extraction of data is not yet complete.
        </p>

        <div className={css.description}>
          <b>Challenges: </b>
          The challenge is to scrapp multiple pages at once, because otherwise
          it is a very lengthy process. Otherwise fairly simple one.
        </div>

        <div className={css.showCode} onClick={toggleCode}>
          Show Sample Code
        </div>
        {/* <div className={css.code} style={{ display: display }}>
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
        </div> */}
        <div className={css.hashTags}>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #GUI
          </div>
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
            #WebScrapping
          </div>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #Selenium
          </div>
          <div
            className={css.tag}
            onClick={(e) => {
              handlehashTags(e.target.outerText.slice(1));
            }}
          >
            #MongoDB
          </div>
        </div>
      </div>
    </>
  );
}
