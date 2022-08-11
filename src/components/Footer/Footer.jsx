<<<<<<< HEAD
import React, {useState} from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setSearchValue } from "../../store/pub/pubSlice";
=======
import React, {useContext, useState} from "react";
import { Catigory } from "../../App";
>>>>>>> bf27c4393cbe0f60563b70ceef881d0a1225689b
import './Footer.css'


const Footer = () => {
<<<<<<< HEAD
    const dispatch = useDispatch()
    const [state, setState] = useState('')
    
    const setValue = (value) => {
        setState(value)
        dispatch(setSearchValue(value)) 
=======
    const [state, setState] = useState('')
    const {setSearchValue} = useContext(Catigory)
    const setValue = (value) => {
        setState(value)
        setSearchValue(value) 
>>>>>>> bf27c4393cbe0f60563b70ceef881d0a1225689b
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