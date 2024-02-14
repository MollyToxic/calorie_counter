import React from "react";
import "../styles/App.css";
function InputRadio(props) {

    function onInputChange(event){
        props.onChange(event.target.value);
    }


    return (
        <div className="input-radio-box">
            <label>
                <input
                    name={props.name_radio}
                    type={props.type}
                    value={props.inputRadioValueDesired}
                    onChange={onInputChange}
                    checked={props.inputRadioValue === props.inputRadioValueDesired ? true : false}
                />
                <span className="custom-radio"></span>
                {props.title}
            </label>
        </div>
    );
};

export default InputRadio;