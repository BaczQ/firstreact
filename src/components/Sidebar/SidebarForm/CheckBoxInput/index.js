import React from "react";
import './index.css';

function CheckBoxInput(props){

    return (
            
            <>
                <input
                    className="sidebar__input-checkbox"
                    type="checkbox"
                    checked={props.checked}
                    onChange={props.inputOnCange}
                    disabled={props.inputIsDisabled}
                    />

                <label
                    className="sidebar__label"
                    htmlFor="company">
                        {props.title}
                </label>

            </>
    
    );
    
    }
    
    export default CheckBoxInput;
