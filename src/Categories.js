import React from "react";

const Categories = ({ filterItems }) => {
  return (
    <div className="btn-container">
      {/*
       there are two downsides fo adding them manually like that:
       - first, if we add more categories, we need to add more filters manually again
       - second, we need to update the page manually after filtering because the (state)items has been changed!
      */}
      <button className="filter-btn" onClick={() => filterItems("all")}>
        all
      </button>

      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        breakfast
      </button>

      <button className="filter-btn" onClick={() => filterItems("lunch")}>
        lunch
      </button>

      <button className="filter-btn" onClick={() => filterItems("shakes")}>
        shakes
      </button>
    </div>
  );
};

export default Categories;
