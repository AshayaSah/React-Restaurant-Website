import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card-container">
        {menuData.map((currElem) => {
          return (
            <>
              <div className="card-container" key={currElem.id}>
                <div className="card">
                  <div className="label">{currElem.id}</div>
                  <div className="time-of-eating">{currElem.category}</div>
                  <h1 className="title">{currElem.name}</h1>
                  <p className="title-description">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{currElem.description}
                  </p>
                  <div className="image">
                    <img src={currElem.image}></img>
                  </div>
                  <div className="order-button">Oder Now</div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
