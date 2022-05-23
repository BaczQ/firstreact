import React from "react";
import './index.css';

function SelectPlusNumberInput(props){

    return (
            
            <>
                <select onChange={props.onChangeSelector} disabled={props.inputIsDisabled}>
                    <option value='>'>более</option>
                    <option value='<'>менее</option>
                    <option value='='>равно</option>
                </select>
     
                <input 
                    className="sidebar__input-number"
                    type="number"
                    min="0"
                    max="100000"
                    step="1"
                    value={props.val}
                    disabled={props.inputIsDisabled}
                    onChange={props.onChangeNumber}
                />
                                
            </>
    
    );
    
    }
    
    export default SelectPlusNumberInput;
    