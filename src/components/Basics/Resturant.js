import React from "react";
import "./style.css";
impo 

const Resturant = () => {
  return (
    <>
    {/* This is the card html layout */}
      <div className="card-container">
        <div className="card">
          <div className="label">1</div>
          <div className="time-of-eating">Breakfast</div>
          <h1 className="title">Noodles</h1>
          <p className="title-description">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Noodles are a type of food made from unleavened dough which is either rolled flat and cut, stretched, or extruded, into long strips or strings..</p>
          <div className="image">
            <img src="https://holycowvegan.net/wp-content/uploads/2021/04/chili-garlic-instant-ramen-noodles-7-680x852.jpg"></img>
          </div>
          <div className="order-button">Oder Now</div>
        </div>
      </div>
    </>
  );
};

export default Resturant;
