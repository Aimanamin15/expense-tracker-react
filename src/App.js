import React, { useState } from "react";
import "./App.css";
import Expenses from "./ExpenseItem/Expenses";
import Card from "./ExpenseItem/Card/Card";
import NewExpense from "./NewExpense/NewExpense";
function App() {
  const dummyexpenses = [
    {
      id: 0,
      title: "House Insurance",
      amount: "15.2$",
      date: new Date(2018, 12, 4),
    },
    {
      id: 2,
      title: "Life Insurance",
      amount: "18.3$",
      date: new Date(2021, 1, 23),
    },
    {
      id: 3,
      title: "Health Insurance",
      amount: "15.4$",
      date: new Date(2022, 3, 22),
    },
  ];
  const [expenses, setExpenses] = useState(dummyexpenses);
  const onGetExpenseDataHandler = (data) => {
    setExpenses((prevState) => {
      return [data, ...prevState];
    });
  };
  return (
    <div className="App">
      <h1>Expenses</h1>
      <NewExpense onGetExpenseData={onGetExpenseDataHandler} />
      <Card className="expense-bg">
        <Expenses expenses={expenses} />
      </Card>
    </div>
  );
}
export default App;
