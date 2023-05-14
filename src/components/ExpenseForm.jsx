import React, { useState } from "react";
import "../style/ExpenseForm.scss";

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitile] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: ''
  //   enteredAmount:''
  //   enteredDate:''
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitile(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.values,
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    // 다시 로드되지 않도록, 기본 요청이 보내지지 않도록
    event.preventDefault();

    // 사용자들이 입력한 data를 하나의 객체로 결합
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    // 제출 후 빈칸으로
    setEnteredTitile("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
}
