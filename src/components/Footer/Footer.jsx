import React, {useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setSearchValue } from "../../store/pub/pubSlice";
import './Footer.css'


const Footer = () => {
    const {searchValue} = useSelector(state => state.pub)
    const dispatch = useDispatch()
    // const [state, setState] = useState('')
    
    const setValue = (value) => {
        // setState(value)
        dispatch(setSearchValue(value)) 
    }
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