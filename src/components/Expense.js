import React,{ useState } from 'react';
import "./expense.css"

function Expense(props)
{
    const [title,setTitle]=useState(props.title);
    
     function del()
     {
        setTitle('new');
        console.log(title);
     }

    return(
        <div className="expense-c">
            <h2 className="expense-item">Expense items</h2>
            <h6 className="expenses">{title}</h6>
            <h6 className="expenses">{props.money}</h6>
            <h6 className="expenses">{props.date}</h6>
            <button id="del" onClick={del}>Delete</button>
        </div>
    )
}

export default Expense;