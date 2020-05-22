import React from 'react';

const Expense = ({expense}) => (
    <li className="gastos">
        <p>
            {expense.expenseName}

<span className="gasto">$ {expense.expenseCount}</span>
        </p>
    </li>
);

 
export default Expense;