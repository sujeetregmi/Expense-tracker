import { useState } from "react";
import "./App.css";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm"

export const categories = ["Groceries", "Utility", "Entertainment", "Banking"];

function App() {
  const [selectCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utility" },
    { id: 2, description: "bbb", amount: 20, category: "Groceries" },
    { id: 3, description: "ccc", amount: 30, category: "Entertainment" },
    { id: 4, description: "ddd", amount: 40, category: "Utility" },
    { id: 5, description: "eee", amount: 40, category: "Banking" },
  ]);

  const visibleExpenses = selectCategory
    ? expenses.filter((e) => e.category == selectCategory)
    : expenses;

  return (
    <>
      <ExpenseForm />

      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </>
  );
}
export default App;
