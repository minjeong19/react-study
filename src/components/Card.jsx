import React from "react";
import "../style/card.scss";

export default function Card(props) {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}
