import React from "react";


const Footer = ({length}) => {
  const Today = new Date();
  return (
    <footer>
      <p>{length} List {length > 1 ? "Items" : "Item"}</p>
      <h6>Copyright &copy;{Today.getFullYear()}</h6>
    </footer>
  );
};

export default Footer;
