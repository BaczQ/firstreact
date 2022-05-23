import React from "react";
import "./index.css";
import FormSearch from "../FormSearch";
import logo from "../../images/header__logo.png";

function Header(props) {
  return (
    <header className="header">
      <div className="header-wrap">
        <img className="header__logo" src={logo} />
        <h1 className="header__title">Поиск репозиториев</h1>

        <FormSearch
            login={props.login}
            onChangeLogin={props.onChangeLogin}
            searchSubmit = {props.searchSubmit}
            btnTitle = {props.btnTitle}
        />
        
      </div>
    </header>
  );
}

export default Header;
