import React from "react";
import "../styles/App.css";
function InputRadio(props) {
    return (
        <>
            <label className="form_title_gender">
                <input 
                    className="form_input_gender"
                    name={props.name_radio}
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