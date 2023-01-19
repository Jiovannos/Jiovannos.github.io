import React from "react";
import css from "./styles.module.css";
import SearchBar from "./searchbar/SearchBar";
import Categories from "./categories/Categories";
import Projects from "./projects/Projects";
import Stacks from "./stacks/Stacks";
import About from "./about/About";

export default function Contents(props) {
  return (
    <div>
      <SearchBar />
      <Categories />
      <About />
      <Projects />
      <Stacks />
    </div>
  );
}
