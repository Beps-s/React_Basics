import React from "react";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expenseDate} />
            <div className="expense-item__description">
                <h2>{props.expenseDesc}</h2>
                <div className="expense-item__price">${props.expenseSum}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;