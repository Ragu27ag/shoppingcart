import React from "react";

import "./Cart.css";

function HeaderCompnent({ addp }) {
  return (
    <>
      <div className="containerxl">
        <div
          className="column"
          style={{
            border: "2px solid black",
            position: "absolute",
            right: "50px",
            top: "30px",
            height: "30px",
            width: "60px",
            borderRadius: "8px",
          }}
        >
          Cart {addp.length}
        </div>
      </div>
      <div
        className="containerxl"
        style={{
          height: "300px",
          backgroundColor: "#212529",
        }}
      >
        <h1 className="conh1">Shop in Style</h1>
        <p className="conp">With this shop hompeage template</p>
      </div>
    </>
  );
}

export default HeaderCompnent;
