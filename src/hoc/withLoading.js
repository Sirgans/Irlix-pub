import React, {Component} from "react";
import { useSelector } from "react-redux";
import { selectorCard } from "../store/pub/pubSlice";
import {Loader} from "../components/Loader";

const withLoading = (Component) => {
    return (props) => {
        const {isLoading} = useSelector(selectorCard)
        if (isLoading) return <Loader />
        return <Component { ...props }/>
    }
}

export default withLoading