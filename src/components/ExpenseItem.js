import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const month = props.expenseDate.toLocaleString('en-US', { month: 'long' });
    const day = props.expenseDate.toLocaleString('en-US', { day: '2-digit' });
    const year = props.expenseDate.getFullYear();
    return (
        <div className="expense-item">
            <div>
                <div>{year}</div>
                <div>{month}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.expenseDesc}</h2>
                <div className="expense-item__price">${props.expenseSum}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;