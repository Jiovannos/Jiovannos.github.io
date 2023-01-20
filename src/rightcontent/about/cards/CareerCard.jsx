import React from "react";
import css from "./styles.module.css";
import { useDispatch } from "react-redux";
import { setVisibility, rotatePosition } from "../../../redux/spaceSlice";
import { useNavigate } from "react-router";

export default function CareerCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const closeCard = () => {
    dispatch(
      setVisibility({ category: "card", visibility: "hidden", opacity: 0 })
    );
    dispatch(rotatePosition({ rotateTo: "about" }));
    navigate("/");
  };
  return (
    <>
      <div className={css.container}>
        <button className={css.xButton} onClick={closeCard}>
          x
        </button>
        <h1 className={css.title}>Career</h1>
        {/* <p className={css.shortDescription}>
          FrontEnd Web Application - React and Three.js.
        </p> */}
        <p className={css.description}>
          {" "}
          <b className={css.bold}>Yannis</b> grew up in construction. His father
          was a civil engineer, owner of a construction company. He visited
          construction sites as a kid and started working there even before
          finishing his Engineering studies. He started as a{" "}
          <b className={css.bold}>Site Engineer</b>, he then became a{" "}
          <b className={css.bold}>Project Manager</b> and finally he founded his
          own construction company, along with his Architect wife, and worked
          for many years as a <b className={css.bold}>Director</b> and{" "}
          <b className={css.bold}>Chief Engineer</b>.
        </p>
        <p className={css.description}>
          The small size of the company dictated that he would took part in
          every aspect of the company's management. From{" "}
          <b className={css.bold}>Technical </b> and{" "}
          <b className={css.bold}>Financial Management</b> to{" "}
          <b className={css.bold}>Human Resources</b> and{" "}
          <b className={css.bold}>Personal Relations.</b>
        </p>
        <p className={css.description}>
          As an inquiring mind he started learning programming for{" "}
          <b className={css.bold}>Business Intelligence </b> purposes. This grew
          into a passion and before he realized it he was a{" "}
          <b className={css.bold}>Construction Manager</b> in the morning, and a{" "}
          <b className={css.bold}>Programmer</b> in the evening.
        </p>{" "}
        <p className={css.description}>
          When programming time grew longer and longer and working two jobs
          became a burden, he decided to quit the construction business and
          become a full-time <b className={css.bold}>Programmer</b>.
        </p>
        <p className={css.description}>
          He started developping a large{" "}
          <b className={css.bold}>Web Application</b> for connecting Contractors
          with Material Suppliers and managed to join his two specializations,
          Construction with Programming. He continued working on his
          construction <b className={css.bold}>Data Analysis</b> applications
          and also developed other construction related applications and many
          hobby projects.
        </p>
        <p className={css.description}>
          His love for maths, statistics and programming led him to the path of{" "}
          <b className={css.bold}>Artificial Intelligence</b>, where he joined a{" "}
          <b className={css.bold}>Masters Program</b> to add those skills to his
          arsenal for creating the best possible applications.
        </p>{" "}
      </div>
    </>
  );
}
