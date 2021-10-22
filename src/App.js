import React, {useState} from "react";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMMY_EXPENSE);

  const AddExpenseHandler = expense => {
    console.log("App.js"); 
    setExpenses((prevexpense) => {
      return [expense, ...prevexpense];
    });
  };


  return (
    <div className="App">
      <h2>Welcome To Your Monthly Expense</h2>
      <NewExpense onAddExpense={AddExpenseHandler} />
      <Expense item={expenses}></Expense>
    </div>
  );
}

export default App;
