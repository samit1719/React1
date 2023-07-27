import React from "react";

const Footer = () => {
  const Today = new Date();
  return (
    <footer>
      <p>Copyright &copy;{Today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
