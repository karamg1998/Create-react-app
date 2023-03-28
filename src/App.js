
import Expense from "./components/Expense";
import Expeseform from "./components/expenseform/Expenseform";

function App() {
  let data=[
    {
      title:'petrol',
      money:56,
      date:'20/12/2022'
    },{
      title:'books',
      money:85,
      date:'21/12/2022'
    }
  ]
  return (
    <div>
      <h1>Expense app</h1>
      <Expeseform></Expeseform>
      <Expense title={data[0].title} money={data[0].money} date={data[0].date}></Expense>
      <Expense title={data[1].title} money={data[1].money} date={data[1].date}></Expense>
    </div>
  );
}

export default App;
