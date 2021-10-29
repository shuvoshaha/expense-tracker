import React, { useContext } from 'react';
import { Context } from '../context/GlobalState';


 export const Transaction = ({ transaction }) => {
  const sign = transaction.amount > 0 ? '' : '-'
  const { dispatch } = useContext(Context)

 return  (
  <div>
   
    <li className= {transaction.amount < 0 ? "minus" : "plus"}>
     {transaction.text} <span>{sign} ৳{Math.abs(transaction.amount)} 
     </span><button onClick={() =>dispatch({ type: 'delete', id: transaction.id}) } className="delete-btn">x</button>
     <p> {transaction.date} </p>
     </li>
  
  </div>
 ) }

