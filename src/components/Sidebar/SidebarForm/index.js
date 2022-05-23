import React from "react";
import './index.css';
import CheckBoxInput from './CheckBoxInput';
import SelectPlusNumberInput from './SelectPlusNumberInput';

function SidebarForm(props){

    return (
        
        <form className="sidebar__form" >
            <span className="sidebar__subtitle">Языки:</span>

            <div className="sidebar__input-conteiner">
                <CheckBoxInput
                    title = "JS"
                    checked = {props.chkBoxJs}
                    inputOnCange = {props.onChangeChkBoxJs}
                    inputIsDisabled = {props.viewFilters}
                />
            </div>

            <div className="sidebar__input-conteiner">
                <CheckBoxInput
                    title = "Go"
                    checked = {props.chkBoxGo}
                    inputOnCange = {props.onChangeChkBoxGo}
                    inputIsDisabled = {props.viewFilters}
                />
            </div>

            <div className="sidebar__input-conteiner">
                <CheckBoxInput
                    title="Python"
                    checked = {props.chkBoxPy}
                    inputOnCange = {props.onChangeChkBoxPy}
                    inputIsDisabled = {props.viewFilters}
                />
            </div>


            <span className="sidebar__subtitle">Форков:</span>

            <div className="sidebar__input-conteiner">
                <SelectPlusNumberInput
                    val = {props.forks}
                    onChangeSelector = {props.onChangeSelectForks}
                    onChangeNumber = {props.onChangeForks}
                    inputIsDisabled = {props.viewFilters}
                />
            </div>

            <span className="sidebar__subtitle">Звёзд:</span>

            <div className="sidebar__input-conteiner">
                <SelectPlusNumberInput
                    val = {props.stars}
                    onChangeSelector = {props.onChangeSelectStars}
                    onChangeNumber = {props.onChangeStars}
                    inputIsDisabled = {props.viewFilters}
                />
            </div>

            <span className="sidebar__subtitle">Форк / Не форк:</span>

            <div className="sidebar__input-conteiner">
                <CheckBoxInput
                    title={props.isFork? "Форк" : "Не Форк"}
                    checked = {props.isFork}
                    inputOnCange = {props.onChangeIsFork}
                    inputIsDisabled = {props.viewFilters}
                />
            </div>
        </form>
    
    );
    
    }
    
    export default SidebarForm;
    