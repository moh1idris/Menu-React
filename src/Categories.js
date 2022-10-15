import React from 'react';

const Categories = ({ categories , filterItems }) => {
  return (
    // <div className="btn-container">
    //   {/* <button className="filter-btn" onClick={()=> filterItems('all')}>all</button>                          {/*Here im Manully adding the button as of now*/}
    //   <button className="filter-btn" onClick={()=> filterItems('breakfast')}>breakfast</button>
    //   <button className="filter-btn" onClick={()=> filterItems('lunch')}>lunch</button>
    //   <button className="filter-btn" onClick={()=> filterItems('shakes')}>shakes</button> */}
    // </div>

    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button className="filter-btn" type='button' key={index} onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
