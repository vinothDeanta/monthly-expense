import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    /*
    Notes:
     {} using the open and close braces we can execute the simple Javascript inside the HTML Content
     
    */
  

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{ props.title }</h2>
                <div className="expense-item__price">{  props.amount }</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;