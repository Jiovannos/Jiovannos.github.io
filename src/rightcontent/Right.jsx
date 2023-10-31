import React from "react";
import css from "./styles.module.css";
import { useSelector } from "react-redux";
import PortfolioCard from "./projects/cards/PortfolioCard";
import SaaSPlatformCard from "./projects/cards/SaaSPlatformCard";
import MinnieAndMaxxCard from "./projects/cards/MinnieAndMaxxCard";
import WeightTrackerCard from "./projects/cards/WeightTrackerCard";
import EyeMouseCard from "./projects/cards/EyeMouseCard";
import ChordPalCard from "./projects/cards/ChordPalCard";
import CareerCard from "./about/cards/CareerCard";
import BioCard from "./about/cards/BioCard";
import { Routes, Route } from "react-router-dom";
import ContantCard from "./contact/ContactCard";
import FrontEndCard from "./stacks/cards/FrontEndCard";
import BackEndCard from "./stacks/cards/BackEndCard";
import DataCard from "./stacks/cards/DataCard";
import PythonCard from "./stacks/cards/PythonCard";
import JavaScriptCard from "./stacks/cards/JavaScriptCard";
import SQLCard from "./stacks/cards/SQLCard";
import NoSQLCard from "./stacks/cards/NoSQLCard";
import CloudCard from "./stacks/cards/CloudCard";
import UnderConstructionCard from "./projects/cards/UnderConstructionCard";
import HappyJobFinderCard from "./projects/cards/HappyJobFinderCard";
import MoreThanBirthdaysCard from "./projects/cards/MoreThanBirthdays";
import PocurementAnalysisCard from "./projects/cards/PocurementAnalysisCard";

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
          <Route path="*" element={<div />} />
          <Route path="/projects/saasplatform" element={<SaaSPlatformCard />} />
          <Route
            path="/projects/minnieandmaxx"
            element={<MinnieAndMaxxCard />}
          />
          <Route
            path="/projects/morethanbirthdays"
            element={<MoreThanBirthdaysCard />}
          />
          <Route
            path="/projects/weighttracker"
            element={<WeightTrackerCard />}
          />
          <Route
            path="/projects/mtgscrapper"
            element={<UnderConstructionCard />}
          />
          <Route path="/projects/eyemouse" element={<EyeMouseCard />} />
          <Route
            path="/projects/bodypercussion"
            element={<UnderConstructionCard />}
          />
          <Route
            path="/projects/procurementanalysis"
            element={<PocurementAnalysisCard />}
          />
          <Route path="/projects/chordpal" element={<ChordPalCard />} />
          <Route
            path="/projects/happyJobFinder"
            element={<HappyJobFinderCard />}
          />
          <Route
            path="/projects/bigfatdata"
            element={<UnderConstructionCard />}
          />
        </Routes>
      </div>
    </div>
  );
}
