import React from "react";
import css from "./styles.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rotateContents, setFocus } from "../../../redux/spaceSlice";
import { filterProjects, setSearchWord } from "../../../redux/searchSlice";
import { useNavigate } from "react-router";
import { SlMagnifier } from "react-icons/sl";

export default function SearchBar(props) {
  const navigate = useNavigate();
  const searchState = useSelector((state) => state.search);
  const searchWord = searchState.searchWord;
  useEffect(() => {
    console.log(searchWord);
    setValue(searchWord);
  }, [searchWord]);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const goBack = () => {
    // Checks the previous Route in the tree and goes there
    let previousLevel = window.location.pathname.substring(
      0,
      window.location.pathname.lastIndexOf("/")
    );
    navigate(previousLevel);
    setValue("");
    dispatch(filterProjects(""));
  };

  const handleKeyEnter = (event) => {
    if (event.key === "Enter") {
      dispatch(filterProjects(searchWord));
      goToProjects();
    }
  };

  const goToProjects = () => {
    navigate("/projects");
  };
  return (
    <div className={css.container}>
      <div className={css.searchbar}>
        <div
          className={css.searchButton}
          onClick={() => {
            dispatch(filterProjects(value));
            goToProjects();
          }}
        >
          <SlMagnifier />
        </div>
        <div
          className={css.back}
          onClick={goBack}
          onMouseOver={() => {
            dispatch(setFocus({ category: "projects", focused: true }));
          }}
        >
          {"<"}
        </div>
        <input
          className={css.input}
          type="text"
          placeholder="Search..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyEnter}
        />
      </div>
      <div className={css.commentDiv}>
        <div className={css.comment}>Type to see projects:</div>
        <div
          className={css.link}
          onClick={() => {
            dispatch(setSearchWord("React"));
            dispatch(filterProjects(value));
            goToProjects();
          }}
        >
          #React
        </div>
        <div
          className={css.link}
          onClick={() => {
            dispatch(setSearchWord("MongoDB"));
            dispatch(filterProjects(value));
            goToProjects();
          }}
        >
          #MongoDB
        </div>
        <div
          className={css.link}
          onClick={() => {
            dispatch(setSearchWord("Flask"));
            dispatch(filterProjects(value));
            goToProjects();
          }}
        >
          #Flask
        </div>
        <div
          className={css.link}
          onClick={() => {
            dispatch(setSearchWord("Redux"));
            dispatch(filterProjects(value));
            goToProjects();
          }}
        >
          #Redux
        </div>
      </div>
    </div>
  );
}
