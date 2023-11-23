import React from "react";
import "../styles/App.css";
function Input(props) {
  function onInputChange(event) {
    props.onChange(event.target.value)
  }
  function inputReset() {
    props.onChange('')
  }
  return (
    <>
      <input autoFocus
        className="form_input"
        name="props.name"
        type={props.type}
        value={props.inputValue}
        onChange={onInputChange}>
        </input>
      <label className="form_title">       
         {props.title}
      </label>
      <button onClick={inputReset}>очистить</button>
    </>
  );
};

export default Input;
