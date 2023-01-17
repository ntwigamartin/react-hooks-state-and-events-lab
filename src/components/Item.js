import React from "react";

function Item({ name, category }) {
  const [inCart, setIncart] = React.useState(false)
  
  const itemClass = inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";
  
  function handleIncart(){
    setIncart(prevInCart=>{
      return !prevInCart
    })
  }
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleIncart}>{buttonText}</button>
    </li>
  );
}

export default Item;
