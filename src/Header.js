import React from "react";

const Header = (props) => {
  // const headerStyle = {
  //   backgroundColor: "mediumblue",
  //   color: "#fff",
  // };
  return (
    <header
    // style={
    //   headerStyle
    //   // {
    //   // backgroundColor: "mediumblue",
    //   // color: "#fff"
    //   // }
    // }
    >
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
