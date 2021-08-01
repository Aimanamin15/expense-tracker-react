import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import Card from "../ExpenseItem/Card/Card";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.random(),
    };
    props.onGetExpenseData(data);
  };
  return (
    <Card className="expense-form">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Card>
  );
};

export default NewExpense;
