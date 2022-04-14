import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <div className="expense-item">
            <div>{props.expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.expenseDesc}</h2>
                <div className="expense-item__price">${props.expenseSum}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;