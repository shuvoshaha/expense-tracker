const Reducer =(state, action) =>{
 switch(action.type){

  case 'delete':
   return {
    ...state, 
    transactions: state.transactions.filter(transaction =>
    (transaction.id !== action.id)) }
 case 'AddItem' :
  return {
  
   transactions: [
     action.AddTransanction,
     ...state.transactions ]
  }
     
  default: 
  return state;
 }
}

export default Reducer