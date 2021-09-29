import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2021, 3, 2);
    const expenseTitle = 'Birthday Expene';
    const expenseAmount = '$250';
    /*
    Notes:
     {} using the open and close braces we can execute the simple Javascript inside the HTML Content

    */
    return (
        <div className="expense-item">
            <div>{ expenseDate.toISOString() }</div>
            <div className="expense-item__description">
                <h2>{ expenseTitle }</h2>
                <div className="expense-item__price">{ expenseAmount }</div>
            </div>
        </div>
    )
}

export default ExpenseItem;