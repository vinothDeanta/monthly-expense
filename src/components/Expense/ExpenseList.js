import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpensesList = (props) => {

    if(props.items.length ===0){
        return <h2 className='expenses-list__fallback'>Found No Expense.</h2>
    }
    
    return (
        <ul className='expenses__list'>
            {props.items.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    ></ExpenseItem>
                ))}
        </ul>
    );
};

export default ExpensesList;