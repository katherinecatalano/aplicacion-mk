import { Fragment } from "react";

export default function Input(props) {
    return (
        <Fragment>
            <label htmlFor="numero">{props.nombre}</label><br/>
            <input className="input" type="text" id="numero" name="numero" placeholder={props.place}/>


        </Fragment>

    )
}
