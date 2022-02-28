import React, {useReducer} from "react";

import './Input.css';
//nuevo
import {validate} from '../../../util/validators.js';


const Input = (props) => {
    let element = '';
    
    //nuevo
    const inputReducer = (state, action) => {
        switch (action.type){
            case 'CHANGE':
                return {
                    ...state,
                    value: action.val,
                    isValid: validate(action.val, action.validators) /*original true*/
                }
            case 'TOUCH':
                return {
                    ...state,
                    isTouched: true
                }
            default:
                return state
        }
    }

    //nuevo
    const [inputState, dispatch] = 
        useReducer(inputReducer, {value: '', isValid: false});

     //nuevo
    const changeHandler = (event) => {
        dispatch({type: 'CHANGE', 
                    val: event.target.value,
                    validators: props.validators})
    }

    const touchHandler = (event) => {
        dispatch({
            type: 'TOUCH'    
        })
    }
    
    if(props.element === 'input'){
        element = <input 
                    id={props.id}
                    type={props.type}
                    placeholder={props.placeholder}
                    onChange={changeHandler}
                    onBlur={touchHandler} 
                    value={inputState.value} />
    } else {
        element = <textarea 
                    id={props.id} 
                    rows={props.rows || 3}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    value={inputState.value}  />
    }

    {/* Anterior */}
        {/*<div className={`form-control`}>
            <label htmlFor={props.id}> {props.label} </label>
            {element}
        </div>*/}

    return(
        
        <div className={`form-control 
                ${!inputState.isValid && 
                   inputState.isTouched && 
                   'form-control--invalid'}`}>
                       
            <label htmlFor={props.id}> {props.label} </label>
            {element}
            {!inputState.value && <p> {props.errorText} </p>}
        </div>
    );
}

export default Input;