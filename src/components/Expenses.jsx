import React, { useState } from "react";
import "../style/Expenses.scss";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

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

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* 동적인 요소를 사용하고 싶을 때 중괄효 {} */}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
