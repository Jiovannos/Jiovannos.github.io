import React from "react";
import css from "./styles.module.css";

export default function Summary(props) {
  return (
    <div className={css.summary}>
      <div>
        Diverse and adaptable, with a plethora of skills at their command.
        Versatility their strength, in an ever-changing world, where jacks of
        all trades make a difference in the end.
        <p className={css.mention}>- a Programmer -</p>
      </div>
    </div>
  );
}
