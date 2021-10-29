import React,{ createContext, useReducer, useEffect} from 'react';
import Reducer from './Reducer'

const TransactionLocalData = JSON.parse(localStorage.getItem('transaction'))

const initialState = {
 transactions:  TransactionLocalData ? TransactionLocalData  : []
                     
}

//create context
export const Context = createContext(initialState)

export const GlobalState =({ children }) =>{
 const [state, dispatch] = useReducer(Reducer, initialState);

useEffect(() =>{
 localStorage.setItem('transaction', JSON.stringify(state.transactions))
}, [state])

return(
 <Context.Provider value={{ transactions: state.transactions, dispatch }}>
 {children}
</Context.Provider>
)
}