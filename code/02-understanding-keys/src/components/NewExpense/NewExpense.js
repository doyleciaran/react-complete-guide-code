import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  // const {isOpen, setIsOpen} = useState('closed');

  // const openPanel = (event) => {
  //   event.preventDefault();

  //   const expenseData = {
  //     title: enteredTitle,
  //     amount: enteredAmount,
  //     date: new Date(enteredDate),
  //   };

  //   props.onSaveExpenseData(expenseData);
  //   setEnteredTitle('');
  //   setEnteredAmount('');
  //   setEnteredDate('');
  // };


  // const saveExpenseDataHandler = (enteredExpenseData) => {
  //   const expenseData = {
  //     ...enteredExpenseData,
  //     id: Math.random().toString()
  //   };
  //   props.onAddExpense(expenseData);
  // };


  return (
    <div className='new-expense'>
      <button>New Expense</button>
    </div>
  );


  // return (
  //   <div className='new-expense'>
  //     <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
  //   </div>
  // );
};

export default NewExpense;
