import React from "react";
import css from "./styles.module.css";
import { useSelector } from "react-redux";
import PortfolioCard from "./projects/cards/PortfolioCard";
import CareerCard from "./about/cards/CareerCard";
import BioCard from "./about/cards/BioCard";
import { Routes, Route } from "react-router-dom";
import Categories from "../leftcontent/contents/categories/Categories";
import ContantCard from "./contact/ContactCard";
import FrontEndCard from "./stacks/cards/FrontEndCard";
import BackEndCard from "./stacks/cards/BackEndCard";

export default function Right() {
  const spaceState = useSelector((state) => state.space);
  const cardState = spaceState.card;
  return (
    <div
      className={css.container}
      style={{ visibility: cardState.visibility, opacity: cardState.opacity }}
    >
      <div className={css.card}>
        <Routes>
          <Route path="/contact" element={<ContantCard />} />
          <Route path="/stacks/frontend" element={<FrontEndCard />} />
          <Route path="/stacks/backend" element={<BackEndCard />} />
          <Route path="/projects/portfolio" element={<PortfolioCard />} />
          <Route path="/about/bio" element={<BioCard />} />
          <Route path="/about/career" element={<CareerCard />} />
          <Route path="*" element={<div />} />
        </Routes>
      </div>
    </div>
  );
}
