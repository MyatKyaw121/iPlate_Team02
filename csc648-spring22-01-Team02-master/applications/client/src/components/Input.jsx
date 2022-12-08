import React from "react";

function Input(props) {
  return (
    <div>
      <input
        type={props.type}
        className="form-control form-input"
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
