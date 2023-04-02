import Expense from "./components/Expense";

function App() {
  const expenses = [
    { title: "a", amount: 30, date: new Date(2023, 4, 2) },
    { title: "b", amount: 33, date: new Date(2023, 4, 4) },
    { title: "c", amount: 32, date: new Date(2023, 4, 6) },
  ];

  return (
    <div>
      <h1>Start</h1>
      <Expense items={expenses} />
    </div>
  );
}

export default App;
