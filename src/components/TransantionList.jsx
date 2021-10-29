import React, { useContext } from 'react';
import { Context } from '../context/GlobalState';
import {Transaction} from './Transaction'

export const TransantionList = () => {
 const { transactions } = useContext(Context);
 
 return  (
  <>
    <h3>History</h3>
    <ul id="list" className="list">
       { transactions.length ? transactions.map((transaction) =>{
         return( <Transaction key={transaction.id} transaction={transaction} />
         )
       }) : <p> There is no transactions </p> }
    </ul>
  </>
 )
}
