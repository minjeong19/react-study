import React from "react";
import "../style/ExpenseFilter.scss";

export default function ExpenseFilter(props) {
  const dropdownChageHandler = (event) => {
    console.log(event.target.value);
    // expenses에 있는 onChangeFilter합수를 호출한 후 그 함수를 통해 props 전달
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter ">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChageHandler}>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
}
