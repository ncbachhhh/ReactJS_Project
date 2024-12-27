import React from "react";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "65vw", height: "80vh" }}>
      <h1>404</h1>
      <h2>PAGE NOT FOUND</h2>
      <div className="">
      <button style={{ padding: "10px", borderRadius: '10px', backgroundColor: '#ff4dc4'  }}> 
      <NavLink to={-1} style={{ color: "white"}}>
          Go Back
        </NavLink>
      </button>
      <button style={{marginLeft: '20px', padding: "10px", borderRadius: '10px', backgroundColor: '#ff4dc4'  }}>
        <NavLink to="/" style={{ color: "white"}}>
          Back to Home
        </NavLink>
      </button>
            </div>
    </div>
  );
}
