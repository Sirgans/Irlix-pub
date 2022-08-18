import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/buttonBack.svg"
import './ButtonBack.css'

const ButtonBack = () => {
    return (
    <Link to={'/Irlix-pub-intensive'}>
    <button className="button-back">
        <img src={image} alt="На главную"/>
    </button>
    </Link>)
}

export default ButtonBack