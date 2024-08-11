import React from "react";
import "../../assets/css/filter.css";

import DropDown from "./DropDown";

import Button from "../ui/button/Button";

const Filter = ({
  maxScroll,
  filters,
  onCategoryChange,
  onBrandChange,
  onRangeChange,
  onClearFilter,
}) => {
  const { currentBrand, currentCategory, brands, category } = filters;

  const handleCategoryChange = (category) => {
    onCategoryChange(category);
  };

  const renderCategories = category.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <li
          className={`${currentCategory.id === item.id ? "active" : ""}`}
          onClick={() => handleCategoryChange(item)}
        >
          {item.name}
        </li>
      </React.Fragment>
    );
  });

  return (
    <div className={`filter ${maxScroll ? "maxScroll" : ""}`}>
      <div className="filter_section">
        <h3>Category</h3>
        <ul>{renderCategories}</ul>
      </div>
      <div className="filter_section">
        <h3>Brands</h3>
        <DropDown
          currentBrand={currentBrand}
          data={brands}
          eventHandler={onBrandChange}
        />
      </div>

      <div className="filter_section">
        <Button text="Clear Filters" btnEvent={onClearFilter} />
      </div>
    </div>
  );
};

export default Filter;
