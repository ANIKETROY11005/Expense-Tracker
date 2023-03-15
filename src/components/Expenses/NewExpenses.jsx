import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './NewExpenses.css'
const NewExpenses = (props) => {

    const [FilterDate, setFilterDate] = useState('2022');

    const changedDateHandler = (selectedYear) => {

        const date = selectedYear;
        setFilterDate(date);

        // console.log(" from newExpenses.js");
        // console.log(FilterDate);

    }



    return (
        <div>

            <Card className='expenses'>
                <ExpensesFilter selectValue={FilterDate} onChangedDate={changedDateHandler} />
                {props.expenses.map(
                    expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
                )}

            </Card>
        </div >
    );


};

export default NewExpenses;