import React from "react";
import './index.css';
import SidebarForm from './SidebarForm';
import Button from "../Button";

function Sidebar(props){

    return (
        
        <aside className="sidebar box-shadow-1">
        
        <h2 className="sidebar_title">Поиск по фильтрам</h2>

                <SidebarForm
        
                    chkBoxJs = {props.chkBoxJs}
                    chkBoxGo = {props.chkBoxGo}
                    chkBoxPy = {props.chkBoxPy}
                    selectForks = {props.selectForks}
                    selectStars = {props.selectStars}
                    forks = {props.forks}
                    stars = {props.stars}
                    isFork = {props.isFork}
            
                    onChangeChkBoxJs = {props.onChangeChkBoxJs}
                    onChangeChkBoxGo = {props.onChangeChkBoxGo}
                    onChangeChkBoxPy = {props.onChangeChkBoxPy}
            
                    onChangeSelectForks = {props.onChangeSelectForks}
                    onChangeSelectStars = {props.onChangeSelectStars}
                    onChangeForks = {props.onChangeForks}
                    onChangeStars = {props.onChangeStars}
            
                    onChangeIsFork = {props.onChangeIsFork}
                    viewFilters = {props.viewFilters}
                />
        
                <div className="sidebar_btn-conteiner">
        
                        <Button
                                btnOnClick = {props.sidebarSubmit}
                                title = {props.btnTitle}
                        />

                </div>            
        </aside>
    
    );
    
    }
    
    export default Sidebar;
