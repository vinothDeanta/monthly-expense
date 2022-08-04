import React, {useState} from 'react';
import ExpensesList from './ExpenseList';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import "./Expenses.css";

const Expense = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020');
    const selectYearHandler = (year) => {
        setSelectedYear(year);
        console.log(year);
      };

     const filteredExpenses = props.item.filter(expense =>{
        return expense.date.getFullYear().toString() === selectedYear;
     });

    //  let expenseContent = <p>No Result Found.</p>;
    //  if(filteredExpenses.length > 0){
    //     expenseContent = filteredExpenses.map((expense) => (
    //         <ExpenseItem
    //             key={expense.id}
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date}
    //         ></ExpenseItem>
    //     ))
    // }

    return (
        <Card className="expense" >
            <ExpensesFilter selected={selectedYear} onSelectYear={selectYearHandler}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
            {/* 
            method 1
            {filteredExpenses.length === 0 && <p>No Result Found.</p>}
            {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                ></ExpenseItem>
            ))}  */}
        </Card>
    );
}

export default Expense;