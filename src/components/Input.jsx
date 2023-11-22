import React from "react";
import "../styles/App.css";
function Input(props) {
  function onInputChange(event) {
    props.onChange(event.target.value)
  }
  return (
    <>
      <label className="form_title">
        <input autoFocus
          className="form_input"
          name= "props.name"
          type={props.type}
          value={props.inputValue}
          onChange={onInputChange}
        ></input>
        {props.title}
      </label>
    </>
  );
};

export default Input;
