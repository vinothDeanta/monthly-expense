import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const SaveExpenseHandler = (enteredExpenseDate) => {
        const expenseDate = {
            ...enteredExpenseDate,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseDate);
    };
 
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={SaveExpenseHandler} />
        </div>
    );
};

export default NewExpense;