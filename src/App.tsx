import "./App.css";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const expenses = [
    { id: 1, description: "aaa", amount: 10, category: "utility" },
    { id: 2, description: "bbb", amount: 20, category: "utility" },
    { id: 3, description: "ccc", amount: 30, category: "utility" },
    { id: 4, description: "ddd", amount: 40, category: "utility" },
  ];
  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => console.log("Deleted", id)}
      />
    </>
  );
}
export default App;
