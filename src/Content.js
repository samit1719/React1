import React from "react";
import ItemList from "./ItemList";



const Content = ({ Items, handleClick ,handleDelete}) => {
  return (
    <main>
      {Items.length ? (
        <ItemList
          Items={Items}
          handleClick={handleClick}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your List is empty</p>
      )}
    </main>
  );
};

export default Content;

// 1:35
