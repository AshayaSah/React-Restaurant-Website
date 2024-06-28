import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";

const Resturant = () => {
  const [menuData, setMenuuData] = useState(Menu);

  return (
    <>

      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
