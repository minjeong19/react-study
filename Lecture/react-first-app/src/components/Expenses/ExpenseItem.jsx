import React from "react";
import "./ExpenseItem.css";
import ExoenseDate from "./ExpenseDate";
import Card from "../Card/Card";

// 비용목록 저장
export default function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExoenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
