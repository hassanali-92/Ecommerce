import {categoryTitles  } from "../data/categorie";
import Checkbox from "./CheackBox";
function CategoryFilter({ selectedCat, onChangeCat }) {
  return (
    <div>
      {categoryTitles.map((category, index) => (
        <Checkbox
          key={index}
          text={category}
          checked={selectedCat.includes(category)}
          onChange={(e) => onChangeCat(category, e.target.checked)}
        />
      ))}
    </div>
  );
}
export default CategoryFilter