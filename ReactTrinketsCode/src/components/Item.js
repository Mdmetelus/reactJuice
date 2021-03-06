import React from "react";
import items from "../data";

function Item(props) {
  console.log(props.match.params.itemId);
  const item = items.find(item => `${item.id}` === props.match.params.itemId);
  console.log(item);
  if (!item) return <h2>no item found...</h2>;
  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>
      <div>
        <p className="item-description">{item.description}</p>
      </div>
    </div>
  );
}

export default Item;
