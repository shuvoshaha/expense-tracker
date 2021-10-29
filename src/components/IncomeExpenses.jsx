import React, { useContext } from 'react';
import { Context } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(Context);

  const amount = transactions.map(transaction => ( transaction.amount ));
  const income = amount.filter(amount =>(amount > 0)).reduce((acc, item) => (acc += item),0).toFixed(2);
  const expanse = amount.filter(amount => (amount < 0)).reduce((acc, item) => ( acc += item ), 0).toFixed(2);

 return (
  <div className="inc-exp-container">
    <div>
     <h4>Income</h4>
     <p id="money-plus" className="money plus">৳{income} </p>
    </div>
    <div>
     <h4>Expense</h4>
     <p id="money-minus" className="money minus">৳{Math.abs(expanse)} </p>
    </div>
  </div>
 )
}
