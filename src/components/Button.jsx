import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

const Button = function(props){
  return (<div >
    <Link to={props.link}>  <button  type="submit" className="link_button">{props.title}</button> </Link>      
</div>

    );
}

export default Button;