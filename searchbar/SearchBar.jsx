import React from "react";
import css from "./styles.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVisibility, rotatePosition } from "../../../redux/spaceSlice";
import { filterProjects } from "../../../redux/searchSlice";
import { useNavigate } from "react-router";
import { SlMagnifier } from "react-icons/sl";

export default function SearchBar(props) {
  const navigate = useNavigate();
  const searchState = useSelector((state) => state.search);
  const spaceState = useSelector((state) => state.space);
  const searchWord = searchState.searchWord;
  useEffect(() => {
    setValue(searchWord);
  }, [searchWord]);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const goBack = () => {
    if (spaceState.card.visibility === "hidden") {
      dispatch(
        setVisibility({
          category: "contents",
          visibility: "visible",
          opacity: 1,
        })
      );
      dispatch(
        setVisibility({
          category: "projects",
          visibility: "hidden",
          opacity: 0,
        })
      );
      dispatch(
        setVisibility({ category: "stacks", visibility: "hidden", opacity: 0 })
      );
      dispatch(
        setVisibility({ category: "about", visibility: "hidden", opacity: 0 })
      );
      dispatch(rotatePosition({ rotateTo: "contents" }));
      navigate("/");
      setValue("");
    } else if (spaceState.projects.visibility === "visible") {
      dispatch(rotatePosition({ rotateTo: "projects" }));
    } else if (spaceState.stacks.visibility === "visible") {
      dispatch(rotatePosition({ rotateTo: "stacks" }));
    } else if (spaceState.about.visibility === "visible") {
      dispatch(rotatePosition({ rotateTo: "about" }));
    } else if (spaceState.about.contents === "visible") {
      dispatch(rotatePosition({ rotateTo: "contents" }));
    }

    dispatch(
      setVisibility({
        category: "card",
        visibility: "hidden",
        opacity: 0,
      })
    );
  };
  const handleKeyEnter = (event) => {
    if (event.key === "Enter") {
      dispatch(filterProjects(value));
      goToProjects();
    }
  };
  const toggleCategory = (cat) => {
    dispatch(
      setVisibility({ category: cat, visibility: "visible", opacity: 1 })
    );
    dispatch(
      setVisibility({ category: "contents", visibility: "hidden", opacity: 0 })
    );
  };
  const goToProjects = () => {
    if (value !== "") {
      dispatch(rotatePosition({ rotateTo: "projects" }));
      toggleCategory("projects");
    }
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
        <div className={css.back} onClick={goBack}>
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
        <div className={css.comment}>Type a keyword to see projects</div>
        <div
          className={css.link}
          onClick={() => {
            setValue("React");
          }}
        >
          #React
        </div>
        <div
          className={css.link}
          onClick={() => {
            setValue("MongoDB");
          }}
        >
          #MongoDB
        </div>
        <div
          className={css.link}
          onClick={() => {
            setValue("Flask");
          }}
        >
          #Flask
        </div>
        <div
          className={css.link}
          onClick={() => {
            setValue("Pandas");
          }}
        >
          #Pandas
        </div>
      </div>
    </div>
  );
}
