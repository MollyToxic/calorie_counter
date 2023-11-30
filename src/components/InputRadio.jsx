import React from "react";
import "../styles/App.css";
function InputRadio(props) {

    function onInputChange(event){
        props.onChange(event.target.value);
    }


    return (
        <>
            <label className="form_title_gender">
                <input 
                    className="form_input_gender"
                    name={props.name_radio}
                    type={props.type}
                    value={props.inputRadioValueDesired}
                    onChange={onInputChange}
                    checked={props.inputRadioValue === props.inputRadioValueDesire ? true : false}
                ></input>
                {props.title}
            </label>
        </>
    );
};

export default InputRadio;