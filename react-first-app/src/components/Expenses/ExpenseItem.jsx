import React, { useState } from "react";
import "./ExpenseItem.css";
import ExoenseDate from "./ExpenseDate";
import Card from "../Card/Card";

// 비용목록 저장
export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("alswjd");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExoenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
