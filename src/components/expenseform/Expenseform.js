import React from 'react';
import "./expenseform.css"

function Expeseform()
{
    function addExp(e)
    {

    }

    return(
        <section className='expense-form-section'>
            <form className='expense-form'>
            <label className='amount'>Amount:</label>
            <input type='number' className='am' id='amount'/>
            <label className='expense'>Expense:</label>
            <input type='text' className='exp' id='expense'/>
            <label className='date'>date:</label>
            <input type='date' className='datee' id='date'/>
            <button id='save' className='save' onClick={addExp}>Save</button>
            </form>
        </section>
    )
}

export default Expeseform;