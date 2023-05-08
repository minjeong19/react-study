import React, { useState } from "react";
import "../style/NewExpense.scss";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const [isClicked, setIsClicked] = useState(false);
  const showAddExpense = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="new-expense">
      {/* isClicked 값에 따라 ExpenseForm 컴포넌트를 렌더링합니다. */}
      {isClicked && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />}
      <button onClick={showAddExpense}>Add New Expense</button>
    </div>
    // <div className="new-expense">
    //   <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    // </div>
  );
}
