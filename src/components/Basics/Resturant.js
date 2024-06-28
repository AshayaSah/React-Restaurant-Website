import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

//Creating the unique list of the categories to automate the rendering of categories
const uniqueList = [...new Set(
  Menu.map((currElem) => {
    return currElem.category;
  })
),"All",];

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [navbarList,setNavbarList] = useState(uniqueList);

  const filteredItem = (category) => {

    if (category == "All"){
        setMenuData(Menu);
        return;
    }

    //Update the menu as per the current navbar button clicked
    const updatedList = Menu.filter((currElem)=>{
        return currElem.category == category;
    });
    console.log(updatedList);
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar navbarList={navbarList} filteredItem={filteredItem}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
