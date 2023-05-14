import React from "react";
import "../style/ExpensesList.scss";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
  // 컴포넌트 함수 자체 로직 생성
  // 비용이 없을 때 이 로직을 렌더링함
  let expensesContent = <p>No expenses found.</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}
