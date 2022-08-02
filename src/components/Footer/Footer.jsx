import React, {useState} from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setSearchValue } from "../../store/pub/pubSlice";
import './Footer.css'


const Footer = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState('')
    
    const setValue = (value) => {
        setState(value)
        dispatch(setSearchValue(value)) 
    }
    return (
        <footer className="footer">
            <div className="container">
                <input className="search_input" value = {state} placeholder = 'Поиск' onChange={e => setValue(e.target.value)}/>
            </div>         
        </footer>
    )
}

export default Footer