import React from "react";
import "./index.css";

function FormSearchInput(props) {
  return (
    <input
      className="form-search__input"
      type="text"
      value={props.login}
      onChange={props.onChangeLogin}
      name="submitForm"
      required
      minLength="2"
      maxLength="40"
      placeholder="Найти по логину"
    />
  );
}

export default FormSearchInput;
