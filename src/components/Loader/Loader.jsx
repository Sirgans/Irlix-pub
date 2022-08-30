import React from "react";
import './Loader.scss'

const Loader = () => {
    return (
        <div className="loader">
            <ul className="loader-wine">
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className="wineglass left">
                <div className="top"></div>
            </div>
            <div className="wineglass right">
                <div className="top"></div>
            </div>
        </div>)
}

export default Loader