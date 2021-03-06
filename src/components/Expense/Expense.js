import react, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";

const Expense = (props) => {
    const [selectedYear, setSelectedYear] = useState('2021')

    const filterChangeHandle = (selectedYear) => {
        console.log(selectedYear);
        setSelectedYear(selectedYear);
    };

    //Filter the Expense Component by Date
    const filterExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    return (
        <Card className="expense">
            <ExpensesFilter selected={selectedYear} onChangeFilterHandler={filterChangeHandle}/>
            {filterExpenses.map((expense) => 
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                ></ExpenseItem>    
                
            )}
            {/* <ExpenseItem
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
            ></ExpenseItem> */}
        </Card>
    );
}

export default Expense;