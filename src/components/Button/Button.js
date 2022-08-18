import React from "react";
import "./Button.css";

function Button({ text, onTouch }) {

  return (
    <div className="container-fluid d-flex justify-content-center mb-2">
        <button onClick={onTouch} idName="btn-productos" className="mt-2 btn btn-primary btn-productos">
            {text}
        </button>
    </div>
    
  );
}

export default Button;