import './ExpenseItem.css';


const ExpenseItem = () => {
    const expenseDate = new Date(2022, 6, 18);
    const expenseDesc =  'Car Insurance';
    const expenseSum = 185.33;
    return (
        <div className="expense-item">
          <div>{expenseDate.toISOString()}</div>
          <div className="expense-item__description">
            <h2>{expenseDesc}</h2>
            <div className="expense-item__price">${expenseSum}</div>
          </div>
        </div>
      );
}

export default ExpenseItem;