import React from "react";


const Footer = ({length}) => {
  const Today = new Date();
  return (
    <footer>
      <p>{length} List {length > 1 ? "Items" : "Item"}</p>
      <p>Copyright &copy;{Today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
