const Checkbox = ({ id, text, checked = false, onChange }) => {
  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 rounded cursor-pointer"
      />
      <label htmlFor={id} className="ml-2 cursor-pointer">{text}</label>
    </div>
  );
};

export default Checkbox;
