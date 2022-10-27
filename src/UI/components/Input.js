import { Fragment } from "react";

import{
    BrowseRouter as Router,
    Routes,
    Route,
    Link
    }From "react-router-dom";
    
export default function Input(props) {
    return (
        <Fragment>
            <label htmlFor="numero">{props.nombre}</label><br/>
            <input className="input" type="text" id="numero" name="numero" placeholder={props.place}/>
            




        </Fragment>

    )
}
