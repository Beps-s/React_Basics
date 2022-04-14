import React from 'react';
import './App.css';

import Expenses from './components/Expenses';

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
      <h2>Cool looking list, ain't it?</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
