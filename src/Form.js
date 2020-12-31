import React from "react";
import { useForm } from "react-hook-form";
import styled from 'styled-components'

const SearchForm = styled.input`
    width: 300px;
    float:left;
    border: 1px dashed blue;
`


const Form = function (props) {
    // console.log(props)
    return (
        <div>
            <SearchForm type="text" placeholder="movie title" onChange={(event) => props.onChange(event.target.value)} ></SearchForm>
        </div>
    )
}

export default Form;