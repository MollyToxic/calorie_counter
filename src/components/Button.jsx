import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

const Button = function(props){
    return (
      <div className="form_button">
        <label>{props.title}</label>
        <Link to={props.link} />
      </div>
    );
}

export default Button;