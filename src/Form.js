import React from "react";
import { useForm } from "react-hook-form";

const Form = function (props) {
    // console.log(props)
    return (
        <div>
            <input type="text" placeholder="movie title" onChange={(event) => props.onChange(event.target.value)} ></input>
        </div>
    )
}

export default Form;