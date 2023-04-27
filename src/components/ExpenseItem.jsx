import React from "react";
import ExpenseDate from "./ExpenseDate";
import "../style/expenseItem.scss";
import Card from "./Card";

export default function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h1 className="title">{props.title}</h1>
        <div className="price">${props.amount}</div>
      </div>
    </Card>
  );
}
