import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "../style/Expenses.scss";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  // filter 메소드가 호출하는 모든 expenses를 저장하는 상수
  // filter는 새로운 배열을 변환, 원래의 배열추가X
  const filteredExpenses = props.items.filter((expense) => {
    // 저장된 date가 필터 선택한 date 와 같을 때 true
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // 컴포넌트 함수 자체 로직 생성
  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* 동적인 요소를 사용하고 싶을 때 중괄효 {} */}
        {expensesContent}
      </Card>
    </div>
  );
}
