import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.expenseDate} />
            <div className="expense-item__description">
                <h2>{props.expenseDesc}</h2>
                <div className="expense-item__price">${props.expenseSum}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;