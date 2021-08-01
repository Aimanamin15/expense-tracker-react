import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card/Card";
import "./Expenses.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredByYear = props.expenses.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="epense">
      <ExpenseFilter
        selected={filteredYear}
        onFilteredChangeYear={filteredChangeHandler}
      />
      {filteredByYear.length === 0 ? (
        <h3>No Expense Found!</h3>
      ) : (
        filteredByYear.map((expenses) => {
          return (
            <ExpenseItem
              key={expenses.id}
              name={expenses.title}
              amount={expenses.amount}
              date={expenses.date}
            />
          );
        })
      )}
    </Card>
  );
};
export default Expenses;
