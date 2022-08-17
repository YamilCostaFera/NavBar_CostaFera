import React from "react";
import "./Button.css";

function Button({ text, type, onTouch }) {

  return (
    <div className="container-fluid d-flex">
        <button onClick={onTouch} className="mt-2 btn btn-primary btn-productos center">
            {text}
        </button>
    </div>
    
  );
}

export default Button;