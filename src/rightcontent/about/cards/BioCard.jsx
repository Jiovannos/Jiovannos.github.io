import React from "react";
import css from "./styles.module.css";
import { useDispatch } from "react-redux";
import {
  setVisibility,
  rotatePosition,
  checkUrl,
} from "../../../redux/spaceSlice";
import { useNavigate } from "react-router";

export default function BioCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
        {/* <p className={css.shortDescription}>
          FrontEnd Web Application - React and Three.js.
        </p> */}
        <div className={css.imgContainer}>
          <img
            src={"/profile.png"}
            className={css.profile}
            alt="jiovannos profile"
          />
          <p className={css.description}>
            {" "}
            <b className={css.bold}>Yannis</b> (Ioannis) is a{" "}
            <b className={css.bold}>Programmer</b> and a{" "}
            <b className={css.bold}>Civil Engineer</b> with a passion for
            creating and a love for learning. He is a graduate of the University
            of Thessaly, with a{" "}
            <b className={css.bold}>MSc in Civil Engineering</b>. He worked as a
            civil engineer and later founded his own construction company.
          </p>
        </div>
        <p className={css.description}>
          He started coding as a hobby but soon realized that it was his true
          vocation. So he changed his career path and now he is programming full
          time for a living. He has experience in a variety of languages and
          frameworks, including <b className={css.bold}>Python</b>,{" "}
          <b className={css.bold}>JavaScript</b>,{" "}
          <b className={css.bold}>React</b>, <b className={css.bold}>Node.js</b>{" "}
          and <b className={css.bold}>SQL</b>.
        </p>
        <p className={css.description}>
          He loves learning new things and is always looking for new challenges.
          He took <b className={css.bold}>Intensive Private Lessons</b> in{" "}
          <b className={css.bold}>Programming</b> and he is currently studying
          for a Master's degree in{" "}
          <b className={css.bold}>Artificial Intelligence.</b>
        </p>
        <p className={css.description}>
          He loves People, Animals, Music, Nature, Board Games, Maths and
          Technology.
        </p>
        <p className={css.description}>
          In his free time, he is playing a plethora of musical instruments,
          hiking in the mountains, hanging out with friends or playing D&D.
        </p>
        <p className={css.description}>
          There is constantly a song playing on the back of his head and he
          can't walk if the song's beat isn't aligned with his steps.
        </p>
        <p className={css.description}>
          He likes to solve small everyday life problems with math and
          transforms every-single-situation into a graph.
        </p>
        {/* <p className={css.description}>
          He enjoys being good at so many things but a little ashamed to be
          hyper-specialized in None of them.
        </p> */}
        <p className={css.description}>
          He is <b className={css.bold}>most proud</b> of his ability to turn
          aggressive people into friendly ones in no time.
        </p>
      </div>
    </>
  );
}
