import React from "react";
import "../style/newExpense.scss";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense() {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
}
