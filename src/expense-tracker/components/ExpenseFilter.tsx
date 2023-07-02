import categories from "../categories";
interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFiltet = ({ onSelectCategory }: Props) => {
  return (
    <>
      <select
        className="form-select mb-3 fw-bold"
        id=""
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default ExpenseFiltet;
