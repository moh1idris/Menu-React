import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// const allCategories = new Set(items.map((item)=> item.category));                       ///--> Here Set is added to not to Repeat the Same CAtegory for the buttons 
// console.log(allCategories);

const allCategories = ['all', ...new Set(items.map((item) => item.category))];             ///--> Here <Set> is added to not to Repeat the Same CAtegory for the buttons --> here we are als0 using Spread Opertor even 
console.log(allCategories);


function App() {
  const [menuItems,setMenuItems] = useState(items);
  const [categories,setCategories] = useState(allCategories);

  const filterItems = (category)=>{                                                        //--> making this to separate the category into items 
    if(category === 'all'){                                                                //--> this will normally will scan the if cate==all then ist will display the all the items
      setMenuItems(items);                
    return;
  }
    const newItems = items.filter((item)=> item.category === category);
    setMenuItems(newItems);
  }
  
  return (
  <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItems={filterItems} categories={categories}/>
      <Menu items={menuItems}/>                                                          {/*Here items={menuItems}--> is nothing but Props*/}
    </section>

  </main>);
}

export default App;
