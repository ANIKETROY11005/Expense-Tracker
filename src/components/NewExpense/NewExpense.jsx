import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';
const NewExpense = (props) => {

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setOpenForm(false);
    };

    const [openForm, setOpenForm] = useState(false);
    const clickHandler = () => {
        setOpenForm(true);
    }

    const onCancelHandler = () => {
        setOpenForm(false);
    }

    let form = <button className='new-expense__button' onClick={clickHandler}>Add New Expense</button>
    if (openForm) {
        form = <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={onCancelHandler} />
    }


    return (
        <div className='new-expense'>

            {form}

        </div>
    )
};

export default NewExpense;