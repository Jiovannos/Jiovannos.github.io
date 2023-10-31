import React from "react";
import css from "./styles.module.css";
import { useNavigate } from "react-router";

export default function CareerCard(props) {
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
        <h1 className={css.title}>Career</h1>
        <p className={css.description}>
          My journey in construction began in childhood, inspired by my father,
          a civil engineer and owner of a construction company. I frequently
          visited construction sites and began working there even before
          completing my Engineering studies. My career evolved from being a{" "}
          <b className={css.bold}>Site Engineer</b> to a{" "}
          <b className={css.bold}>Project Manager</b>, and eventually, I
          established my own construction company with my architect wife, taking
          on roles as a <b className={css.bold}>Director</b> and{" "}
          <b className={css.bold}>Chief Engineer</b>.
        </p>
        <p className={css.description}>
          Running a small company meant I was involved in every aspect of its
          management, from <b className={css.bold}>Technical</b> and{" "}
          <b className={css.bold}>Financial Management</b> to{" "}
          <b className={css.bold}>Human Resources</b> and{" "}
          <b className={css.bold}>Personal Relations</b>.
        </p>
        <p className={css.description}>
          My inquisitive nature led me to{" "}
          <b className={css.bold}>Programming</b>, initially for{" "}
          <b className={css.bold}>Business Intelligence</b> purposes. This
          interest quickly grew into a passion, and soon I was spending my
          evenings coding after my construction work.
        </p>
        <p className={css.description}>
          As programming began to occupy more of my time, balancing two careers
          became challenging. I decided to leave the construction industry to
          pursue programming full-time.
        </p>
        <p className={css.description}>
          I embarked on developing a large{" "}
          <b className={css.bold}>Web Application</b> to connect contractors
          with material suppliers, merging my expertise in construction and
          programming. My projects include construction{" "}
          <b className={css.bold}>Data Analysis</b> applications, other
          industry-related applications, and various hobby projects.
        </p>
        <p className={css.description}>
          My affinity for maths, statistics, and programming eventually steered
          me towards <b className={css.bold}>Artificial Intelligence</b>,
          leading me to enroll in a <b className={css.bold}>Master's Program</b>{" "}
          to further enhance my skills for creating advanced applications.
        </p>
      </div>
    </>
  );
}
