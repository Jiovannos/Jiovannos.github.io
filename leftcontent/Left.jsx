import React from "react";
import css from "./styles.module.css";
import MainTitle from "./title/MainTitle";
import Summary from "./summary/Sumamry";
import Contents from "./contents/Contents";

export default function Left() {
  return (
    <div className={css.container}>
      <MainTitle />
      <Summary />
      <Contents />
    </div>
  );
}
