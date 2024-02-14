import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

const Button = function(props){
  return (<div >
    <Link to={props.link}>  <button onClick={props.click} type="submit" className="button">{props.title}</button> </Link>      
</div>)}

export default Button;