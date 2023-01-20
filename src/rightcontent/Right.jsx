import React from "react";
import css from "./styles.module.css";
import { useSelector } from "react-redux";
import PortfolioCard from "./projects/cards/PortfolioCard";
import CareerCard from "./about/cards/CareerCard";
import BioCard from "./about/cards/BioCard";
import { Routes, Route } from "react-router-dom";

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
          <Route path="Portfolio" element={<PortfolioCard />} />
          <Route path="Bio" element={<BioCard />} />
          <Route path="Career" element={<CareerCard />} />
        </Routes>
      </div>
    </div>
  );
}
