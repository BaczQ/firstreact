import { useState, useEffect } from 'react';
import React from "react";
import './index.css';

function Button(props){
    return (
        <button
            type="submit"
            onClick={props.btnOnClick}
            className="button">
                {props.title}
        </button>
        
    );
    
    }
    
    export default Button;
    