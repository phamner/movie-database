import React from "react";
import { useForm } from "react-hook-form";
import styled from 'styled-components'

const SearchForm = styled.input`
    width: 300px;
    float:left;
    border: 1px solid black;
    margin: 1em 0 1em 1em;
    padding: 0.25em;
    border-radius: 3px;
`


const Form = function (props) {
    return (
        <div>
            <SearchForm type="text" placeholder="movie title" onChange={(event) => props.onChange(event.target.value)} ></SearchForm>
        </div>
    )
}

export default Form;