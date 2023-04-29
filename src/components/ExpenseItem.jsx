import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "../style/expenseItem.scss";
import Card from "./Card";

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h1 className="title">{title}</h1>
        <div className="price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
