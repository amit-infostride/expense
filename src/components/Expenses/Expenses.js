import React, { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filteredChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    };

    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })



  

    return (
        <Card className='expenses'>
            <ExpensesFilter selected2={filteredYear}
                onChangeFilter={filteredChangeHandler} />
                <ExpensesChart  expenses121= {filteredExpenses}/>
          <ExpensesList  item ={filteredExpenses}/>
        </Card>
    )
}

export default Expenses