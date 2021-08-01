import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredDate: "",
  //   enteredAmount: "",
  // });
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: e.target.value };
    // });
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: e.target.value };
    // });
  };
  const expenseSubmitHandler = (e) => {
    e.prevantDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle(" ");
    setEnteredAmount(" ");
    setEnteredDate(" ");
  };

  return (
    <form onSubmit={expenseSubmitHandler}>
      <div className="input-form-controls">
        <div className="input-form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>

        {/* <div className="input-form-controls"> */}
        <div className="input-form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        {/* </div> */}

        {/* <div className="input-form-controls"> */}
        <div className="input-form-control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            min="2019-1-1"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
        {/* </div> */}
      </div>
      <div className="expense-form-btn">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
