import React from "react";
import './index.css';
import FormSearchInput from './FormSearchInput';
import Button from '../Button';

function FormSearch(props){

    return (
        
        <form className="form-search">
           <FormSearchInput
                login = {props.login}
                onChangeLogin = {props.onChangeLogin}
           />
                
           <Button
                btnOnClick = {props.searchSubmit}
                title = {props.btnTitle}
           />
        </form>
    
    );
    
    }
    
export default FormSearch;
