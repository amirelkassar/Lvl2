import ExpenseItem from './components/Expenses/ExpenseItem';
import './App.css';
function App() {
  const expenses = [
    { id: 1, name: 'Car', date: new Date(2023, 11, 1).toDateString(), amount: 202.55 },
    { id: 2, name: 'Phone', date: new Date(2023, 11, 1).toDateString(), amount: 55.3 },
    { id: 3, name: 'Hat', date: new Date(2023, 11, 1).toDateString(), amount: 100 },
    { id: 4, name: 'Car', date: new Date(2023, 11, 1).toDateString(), amount: 500.6 }
  ];
  return (
    <div className="App">
      <h1>Welcome to lvl1</h1>
      <ExpenseItem expenses={expenses} />
    </div>
  );
}

export default App;
