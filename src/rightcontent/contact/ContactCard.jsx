import React, { useState, useEffect } from "react";
import css from "./styles.module.css";
import { useNavigate } from "react-router";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineClockCircle,
  AiFillCheckCircle,
  AiFillPauseCircle,
  AiFillCloseCircle,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

function hoursToStatus(hours) {
  if (hours >= 0 && hours < 6) {
    return [
      "Sleeping",
      "red",
      <AiFillPauseCircle className={css.icon} color="red" />,
    ];
  } else if (hours >= 6 && hours < 19) {
    return [
      "Active",
      "green",
      <AiFillCheckCircle className={css.icon} color="green" />,
    ];
  } else if (hours >= 19 && hours < 24) {
    return [
      "Resting",
      "yellow",
      <AiFillCloseCircle className={css.icon} color="yellow" />,
    ];
  }
}

export default function ContantCard(props) {
  const navigate = useNavigate();
  const closeCard = () => {
    navigate("/");
  };
  let startingDate = new Date();
  let startingDateFormatted =
    ("0" + (startingDate.getUTCHours() + 2)).slice(-2) +
    ":" +
    ("0" + startingDate.getUTCMinutes()).slice(-2);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [dateFormated, setDateFormated] = useState(startingDateFormatted);
  const [status, setStatus] = useState(
    hoursToStatus(currentTime.getUTCHours())
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      let dateformatted =
        ("0" + (currentTime.getUTCHours() + 2)).slice(-2) +
        ":" +
        ("0" + currentTime.getUTCMinutes()).slice(-2);
      console.log(dateformatted.toString());
      setDateFormated(dateformatted.toString());
      setStatus(hoursToStatus(currentTime.getUTCHours()));
    }, 60000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <div className={css.container}>
        <button className={css.xButton} onClick={closeCard}>
          x
        </button>
        <h1 className={css.title}>Contact</h1>
        {/* <p className={css.shortDescription}>
          FrontEnd Web Application - React and Three.js.
        </p> */}
        <div className={css.section}>
          <AiOutlineMail className={css.icon} />
          {/* <div className={css.lowerTitle}>E-mail:</div> */}
          <a className={css.link} href={"mailto: tsolisioann@gmail.com"}>
            tsolisioann@gmail.com
          </a>
        </div>
        <div className={css.section}>
          <AiFillLinkedin className={css.icon} />
          <a
            className={css.link}
            href={"https://www.linkedin.com/in/ioannis-tsolis"}
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/ioannis-tsolis
          </a>
        </div>
        <div className={css.section}>
          <AiFillGithub className={css.icon} />
          <a
            className={css.link}
            href={"https://github.com/Jiovannos"}
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/Jiovannos
          </a>
        </div>
        <div className={css.section}>
          <AiOutlinePhone className={css.icon} />
          <a className={css.link} href={"tel: +30 6974978507"}>
            +30 697 497 85 07
          </a>
        </div>
        {/* <div className={css.section}>
          <AiOutlineClockCircle className={css.icon} />
          <div>Local Time - {dateFormated}</div>
        </div>
        <div className={css.section}>
          {status[2]}
          <div style={{ color: status[1] }}>{status[0]}</div>
        </div> */}
      </div>
    </>
  );
}
