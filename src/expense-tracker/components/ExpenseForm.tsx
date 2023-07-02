import { categories } from "../../App";

const ExpenseForm = () => {
  return (
    <form action="" className="mb-5">
      <div className="mb-3">
        <label htmlFor="description" className="form-label fw-bold">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label fw-bold">
          Amount
        </label>
        <input id="amount" type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label fw-bold">
          Category
        </label>
        <select id="category" className="form-select">
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary fw-bold">Submit</button>
    </form>
  );
};

export default ExpenseForm;
