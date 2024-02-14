import React from "react";
import "../styles/App.css";
function Input(props) {
  function onInputChange(event) {
    props.onChange(event.target.value)
  }

  return (
  <div className="input-box">
    <label>
      {props.title}
    </label>       
    <input autoFocus
      className= "form_input"
        name={props.name}
      type={props.type}
      min={props.min}
      max={props.max}
      value={props.inputValue}
      onChange={onInputChange}/>
    </div>
  );
};

export default Input;
