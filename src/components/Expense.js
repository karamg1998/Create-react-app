import "./expense.css"

function Expense()
{
     function del()
     {
        console.log('hello');
     }


    let e1=`Food rs10`;
    let e2=`Petrol re500`;
    let e3=`Movie rs200`;
    return(
        <div className="expense-c">
            <h2 className="expense-item">Expense items</h2>
            <h6 className="expenses">{e1}</h6>
            <h6 className="expenses">{e2}</h6>
            <h6 className="expenses">{e3}</h6>
            <button id="del" onClick={del()}>Delete</button>
        </div>
    )
}

export default Expense;