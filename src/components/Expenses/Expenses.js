import React from "react";
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
    return (
        <div className="expenses">
            <ExpenseItem
                expenseDesc={props.items[0].expenseDesc}
                expenseSum={props.items[0].expenseSum}
                expenseDate={props.items[0].expenseDate}
            ></ExpenseItem>
            <ExpenseItem
                expenseDesc={props.items[1].expenseDesc}
                expenseSum={props.items[1].expenseSum}
                expenseDate={props.items[1].expenseDate}
            ></ExpenseItem>
            <ExpenseItem
                expenseDesc={props.items[2].expenseDesc}
                expenseSum={props.items[2].expenseSum}
                expenseDate={props.items[2].expenseDate}
            ></ExpenseItem>
            <ExpenseItem
                expenseDesc={props.items[3].expenseDesc}
                expenseSum={props.items[3].expenseSum}
                expenseDate={props.items[3].expenseDate}
            ></ExpenseItem>
        </div>
    )
}

export default Expenses;