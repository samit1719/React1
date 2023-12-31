import "./index.css";
import Header from "./Header";
import Searchitem from "./Searchitem"
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import { useEffect, useState } from "react";

function App() {

  const [Items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);
  const [newItem, setNewItem] = useState("");
  const [search,setSearch] = useState('')

  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(Items));
  },[Items])

  

  const addItem = (item) => {
    const id = Items.length ? Items[Items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...Items, myNewItem];
    setItems(listItems);
    
  };

  const handleClick = (id) => {
    const listItems = Items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = Items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Groceries" />
      
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <Searchitem 
        search={search}
        setSearch={setSearch}
      />

      <Content
        Items={Items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleClick={handleClick}
        handleDelete={handleDelete}
      />

      <Footer length={Items.length} />
    </div>
  );
}

export default App;


// 3:05
