import React from "react";
import './Footer.scss'


const Footer = ({searchValue, setValue}) => {
    return (
        <footer className="footer">
            <div className="container">
                <input className="search_input" 
                placeholder = 'Поиск' 
                value={searchValue} 
                onChange={e => setValue(e.target.value)}/>
            </div>         
        </footer>
    )
}

export default Footer