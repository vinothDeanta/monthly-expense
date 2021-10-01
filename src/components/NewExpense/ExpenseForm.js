import React, { useState } from "react";
import './ExpenseForm.css';


const ExpenseForm = () => {
    /*
        ... =  stand for speard operator 
    */

   /*
    One Method:

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    */

    /******** Second Method **********/

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    // For Title
    const titleChangeHandler = (event) => {
        
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        });
        // if state depend the pervious state means we go for the below approach

        setUserInput((prevstate) => {
            return {...prevstate, enteredTitle: event.target.value};
        });
        
    };

     // For Amount
    const amountChangeHandler = event => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        });
    };

    // For Date
    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        });
    };
   

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2021-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add Expense</button>
            </div>

        </form>
    );
};

export default ExpenseForm;