import React from "react";
import "../styles/App.css";

const Input = function (props) {

  function onInputChange(event){
    props.onChange(event.target.value)
  }
  return (
    <>
      <label className="form_title">
        <input autoFocus
          className="form_input"
          type="text"
          value={props.inputValue}
          onChange={onInputChange}
        ></input>
        {props.title}
      </label>
    </>
  );
};

export default Input;
