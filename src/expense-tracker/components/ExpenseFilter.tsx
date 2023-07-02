interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFiltet = ({ onSelectCategory }: Props) => {
  return (
    <>
      <select
        className="form-select"
        id=""
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All categories</option>
        <option value="Groceries">Gorceries</option>
        <option value="Utility">Utility</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Banking">Banking</option>
      </select>
    </>
  );
};

export default ExpenseFiltet;
