import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";

function Expense(props) {


    return (
        <Card className="expense">
            <ExpenseItem
                title={props.item[0].title}
                amount={props.item[0].amount}
                date={props.item[0].date}
            ></ExpenseItem>

            <ExpenseItem
                title={props.item[1].title}
                amount={props.item[1].amount}
                date={props.item[1].date}
            ></ExpenseItem>

            <ExpenseItem
                title={props.item[1].title}
                amount={props.item[1].amount}
                date={props.item[1].date}
            ></ExpenseItem>

            <ExpenseItem
                title={props.item[3].title}
                amount={props.item[3].amount}
                date={props.item[3].date}
            ></ExpenseItem>
        </Card>
    );
}

export default Expense;