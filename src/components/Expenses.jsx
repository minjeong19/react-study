import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../style/expenses.scss";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";

export default function Expenses(props) {
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[0].date}
        />
      </Card>
    </div>
  );
}
