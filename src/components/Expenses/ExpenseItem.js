import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {

    // let title =props.title;
    const [title, setTitle] = useState(props.title)
    console.log('expense Item evaluated by React !');

    const clickHandler = () => {
        // console.log('clicked !!');
        // title = 'updated !'
        // console.log(title);+
        setTitle('updated !')
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date2={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem
