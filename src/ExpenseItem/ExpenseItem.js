import React from "react";
import Card from "../ExpenseItem/Card/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  // // const title = props.title;
  // const titleChangeHandler = () => {
  //   setTitle("Updated");
  //   console.log("Clicked");
  // };
  return (
    <li>
      <Card className="ExpenseItem">
        <ExpenseDate date={props.date} />
        <div className="ExpenseItem__description">
          <h2> {props.name} </h2>
          <p> {props.amount} </p>
        </div>
        {/* <button type="button" onClick={titleChangeHandler}>
          Change Title
        </button> */}
      </Card>
    </li>
  );
}
export default ExpenseItem;
