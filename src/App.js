import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems,setMenuItems] = useState(items);
  const [categories,setCategories] = useState([]);

  const filterItems = (category)=>{                                                    //--> making this to separate the category into items 
    if(category === 'all'){                                                            //--> this will normally will scan the if cate==all then ist will display the all the items
      setMenuItems(items);                
    return;
  }

    const newItems = items.filter((item)=> item.category === category);
    setMenuItems(newItems);
  }
  return (
  <main>u
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItems={filterItems}/>
      <Menu items={menuItems}/>                                            {/*Here items={menuItems}--> is nothing but Props*/}
    </section>

  </main>);
}

export default App;
