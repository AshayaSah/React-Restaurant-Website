import React from "react";

// function to return the actual navbar
const Navbar = ({ navbarList, filteredItem }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {navbarList.map((currElem) => {
            return (
              <button
                className="btn"
                onClick={() => {
                  filteredItem(currElem);
                }}
                key={currElem}
              >
                {currElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
