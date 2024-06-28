import React from "react";

const Navbar = ({ navbarList, filteredItem }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {navbarList.map((currElem) => {
            return (
              <>
                <button
                  className="btn"
                  onClick={() => {
                    filteredItem(currElem);
                  }}
                >
                  {currElem}
                </button>
              </>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
