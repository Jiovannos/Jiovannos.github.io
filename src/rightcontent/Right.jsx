import React from "react";
import css from "./styles.module.css";
import { useSelector } from "react-redux";
import PortfolioCard from "./projects/cards/PortfolioCard";
import CareerCard from "./about/cards/CareerCard";
import BioCard from "./about/cards/BioCard";
import { Routes, Route } from "react-router-dom";
import ContantCard from "./contact/ContactCard";
import FrontEndCard from "./stacks/cards/FrontEndCard";
import BackEndCard from "./stacks/cards/BackEndCard";
import DataCard from "./stacks/cards/DataCard";
import PythonCard from "./stacks/cards/JavaScriptCard";
import JavaScriptCard from "./stacks/cards/JavaScriptCard";
import SQLCard from "./stacks/cards/SQLCard";
import NoSQLCard from "./stacks/cards/NoSQLCard";
import CloudCard from "./stacks/cards/CloudCard";
import UnderConstructionCard from "./projects/cards/UnderConstructionCard";

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
          <Route path="/stacks/data" element={<DataCard />} />
          <Route path="/stacks/python" element={<PythonCard />} />
          <Route path="/stacks/javascript" element={<JavaScriptCard />} />
          <Route path="/stacks/sql" element={<SQLCard />} />
          <Route path="/stacks/nosql" element={<NoSQLCard />} />
          <Route path="/stacks/cloud" element={<CloudCard />} />
          <Route path="/projects/portfolio" element={<PortfolioCard />} />
          <Route path="/about/bio" element={<BioCard />} />
          <Route path="/about/career" element={<CareerCard />} />
          <Route path="*" element={<UnderConstructionCard />} />
        </Routes>
      </div>
    </div>
  );
}
