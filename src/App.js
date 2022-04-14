import React from 'react';
import './App.css';

import ExpenseItem from './components/ExpenseItem';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      expenseDesc: 'Toilet Paper',
      expenseSum: 94.12,
      expenseDate: new Date(2020, 7, 14),
    },
    { id: 'e2',
    expenseDesc: 'New TV',
      expenseSum: 799.49,
      expenseDate: new Date(2021, 2, 12) },
    {
      id: 'e3',
      expenseDesc: 'Car Insurance',
      expenseSum: 294.67,
      expenseDate: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      expenseDesc: 'New Desk (Wooden)',
      expenseSum: 450,
      expenseDate: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        expenseDesc={expenses[0].expenseDesc}
        expenseSum={expenses[0].expenseSum}
        expenseDate={expenses[0].expenseDate}
      ></ExpenseItem>
      <ExpenseItem
        expenseDesc={expenses[1].expenseDesc}
        expenseSum={expenses[1].expenseSum}
        expenseDate={expenses[1].expenseDate}
      ></ExpenseItem>
      <ExpenseItem
        expenseDesc={expenses[2].expenseDesc}
        expenseSum={expenses[2].expenseSum}
        expenseDate={expenses[2].expenseDate}
      ></ExpenseItem>
      <ExpenseItem
        expenseDesc={expenses[3].expenseDesc}
        expenseSum={expenses[3].expenseSum}
        expenseDate={expenses[3].expenseDate}
      ></ExpenseItem>
    </div>
  );
}

export default App;
