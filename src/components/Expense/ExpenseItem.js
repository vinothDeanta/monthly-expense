import React, { useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    console.log("ExpenseItem evaluated by React");

    const clickHandler = () =>{
        setTitle('Update the Title');
        console.log(title);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{ title }</h2>
                <div className="expense-item__price">{  props.amount }</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;

    /*
    Notes:
     {} using the open and close braces we can execute the simple Javascript inside the HTML Content
     useState() - useState one of important hooks concepts. contain two parameter 'setter'and 'getter'
        example:
            [title, SetTitle] 
            SetTitle is setter value for the title state.
            title is getter value for the title state.
     State is a plain JavaScript object used by React to represent an information about the component's current situation. 
     It's managed in the component (just like any variable declared in a function).
    */