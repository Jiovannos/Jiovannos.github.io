import React from "react";
import css from "./styles.module.css";
import SearchBar from "./searchbar/SearchBar";
import Categories from "./categories/Categories";
import Projects from "./projects/Projects";
import Stacks from "./stacks/Stacks";
import About from "./about/About";
import { Route, Routes } from "react-router-dom";

export default function Contents(props) {
  return (
    <div>
      <SearchBar />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/projects/*" element={<Projects />} />
        <Route path="/stacks/*" element={<Stacks />} />
        <Route path="*" element={<Categories />} />
      </Routes>
    </div>
  );
}
