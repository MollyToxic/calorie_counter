import React from "react";
import "../styles/App.css";
function InputRadio(props) {
    return (
        <>
            <label className="form_title">
                <input 
                    className="form_input"
                    name="props.name"
                    type={props.type}
                    value={props.inputValue}
                    onClick={()=>!props.inputValue}
                ></input>
                {props.title}
            </label>
        </>
    );
};

export default InputRadio;