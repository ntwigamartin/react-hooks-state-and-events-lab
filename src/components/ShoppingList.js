import React from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  
  if(selectedCategory==="All"){
    items = [
      { id: 1, name: "Yogurt", category: "Dairy" },
      { id: 2, name: "Pomegranate", category: "Produce" },
      { id: 3, name: "Lettuce", category: "Produce" },
      { id: 4, name: "String Cheese", category: "Dairy" },
      { id: 5, name: "Cookies", category: "Dessert" },
    ]
  }
  else if (selectedCategory==="Produce"){
    items = [
      { id: 2, name: "Pomegranate", category: "Produce" },
      { id: 3, name: "Lettuce", category: "Produce" },
    ]
  }
  else if (selectedCategory==="Dairy"){
    items = [
      { id: 1, name: "Yogurt", category: "Dairy" },
      { id: 4, name: "String Cheese", category: "Dairy" },
    ]
  }
  else if(selectedCategory==="Dessert"){
    items = [
      { id: 5, name: "Cookies", category: "Dessert" },
    ]
  }



  function handleFilter (e){
    setSelectedCategory(e.target.value)
  }
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
