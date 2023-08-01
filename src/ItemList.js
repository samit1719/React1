import React from 'react';
import LineItem from './LineItem';


function ItemList({ Items, handleClick, handleDelete }) {
  return (
    <ul>
      {Items.map((item) => (
          <LineItem 
            key={item.id}
            Item={item}
            handleClick={handleClick}
            handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ItemList