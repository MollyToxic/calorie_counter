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
    <div className="form_flex"><div >     
      <label className="form_title">
 
        {props.title}
      </label>       <input autoFocus
        className="form_input"
        name="props.name"
        type={props.type}
        value={props.inputValue}
        onChange={onInputChange}>
      </input>
    </div>
      <button onClick={inputReset} className="input_btn">X</button> 
 
 
    </div>
  );
};

export default Input;
