import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css'
const Expenses = (props) => {

    const [FilterDate, setFilterDate] = useState('2022');

    const changedDateHandler = (selectedYear) => {


        setFilterDate(selectedYear);

        // console.log(" from newExpenses.js");
        // console.log(FilterDate);

    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === FilterDate;
    });

    let expenseContent = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map(
            expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        );
    }

    return (
        <div>

            <Card className='expenses'>
                <ExpensesFilter selectValue={FilterDate} onChangedDate={changedDateHandler} />
                {expenseContent}

            </Card>
        </div >
    );


};

export default Expenses;