import React, { useContext } from 'react';
import { Context } from '../context/GlobalState'

export const Balance = () => {
 const { transactions } = useContext(Context);
 
 const amounts =  transactions.map(transaction => transaction.amount );
 const total = amounts !== '' ? amounts.reduce(( acc, item ) => (acc += item ), 0).toFixed(2): "0.00"

 return (
  <>
   <h3 className="balancer-title">Your Balance</h3>
   <p className="balance">৳ {total} </p>
  </>
 )
}
