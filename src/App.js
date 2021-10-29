import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header'
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransantionList } from './components/TransantionList';
import { GlobalState } from './context/GlobalState';

function App() {
  return (
    <div>
    <GlobalState>
      <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <AddTransaction />
          <TransantionList />
        </div>
    </GlobalState>
    </div>
  );
}

export default App;
