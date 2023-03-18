import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';
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



    return (
        <div>

            <Card className='expenses'>
                <ExpensesFilter selectValue={FilterDate} onChangedDate={changedDateHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />

            </Card>
        </div >
    );


};

export default Expenses;