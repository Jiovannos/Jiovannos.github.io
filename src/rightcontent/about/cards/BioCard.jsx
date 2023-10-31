import React from "react";
import css from "./styles.module.css";
import { useNavigate } from "react-router";

export default function BioCard(props) {
  const navigate = useNavigate();
  const closeCard = () => {
    navigate("/about");
  };

  return (
    <>
      <div className={css.container}>
        <button className={css.xButton} onClick={closeCard}>
          x
        </button>
        <h1 className={css.title}>Biography</h1>
        <div className={css.imgContainer}>
          <img src={"/profile.png"} className={css.profile} alt="my profile" />
          <p className={css.description}>
            I am <b className={css.bold}>Yannis</b> (Ioannis), a{" "}
            <b className={css.bold}>Programmer</b> and a{" "}
            <b className={css.bold}>Civil Engineer</b> with a deep passion for
            creation and a love for learning. I graduated from the University of
            Thessaly, Greece, with a{" "}
            <b className={css.bold}>MSc in Civil Engineering</b>. I started my
            career as a civil engineer, and later, I founded my own construction
            company.
          </p>
        </div>
        <p className={css.description}>
          Initially, I took up coding as a hobby but it quickly became apparent
          that it was my true calling. Consequently, I shifted my career towards
          programming full-time. My expertise spans various languages and
          frameworks, including <b className={css.bold}>Python</b>,{" "}
          <b className={css.bold}>JavaScript</b>,{" "}
          <b className={css.bold}>React</b>, <b className={css.bold}>Node.js</b>
          , and <b className={css.bold}>SQL</b>.
        </p>
        <p className={css.description}>
          My daily routine is centered around learning something new and
          tackling fresh challenges. I have taken{" "}
          <b className={css.bold}>Intensive Private Lessons</b> in{" "}
          <b className={css.bold}>Programming</b> and am currently pursuing a
          Master's degree in <b className={css.bold}>Artificial Intelligence</b>
          .
        </p>
        <p className={css.description}>
          People, animals, music, nature, board games, maths, and technology are
          my passions. In my free time, I engage in playing various musical
          instruments, hiking in the mountains, socializing with friends, or
          playing D&D. There's always a song playing in the back of my mind, and
          I can't walk if the beat isn't in sync with my steps.
        </p>
        <p className={css.description}>
          I often apply mathematical solutions to everyday problems and enjoy
          turning every situation into a graph. My{" "}
          <b className={css.bold}>superpower</b> lies in my ability to quickly
          transform aggressive individuals into friendly ones.
        </p>
      </div>
    </>
  );
}
