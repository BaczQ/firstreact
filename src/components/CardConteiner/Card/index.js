import React from "react";
import './index.css';

function Card(props) {

return (

<div className="card box-shadow-1">
  <div className="card__top-content">
    <h2 className="card__title">{((props.id+1)+(props.page-1)*10)+'. '}<a className="card__replink" href={props.arr.url}
        target="_blank">{props.arr.name}</a></h2>
    <span className="card__id">id: {props.arr.id}</span>
  </div>
  <div className="card__bottom-content">
    <div className="card__side-content">

      <img className="card__avatar" src={props.arr.userAvatar} />
      <p className="card__username"><a className="card__userlink" href={props.arr.userProfileUrl}
          target="_blank">{props.arr.userLogin}</a></p>
    </div>
    <div className="card__content">
      <h3 className="card__h3">Описание:</h3>
      <p className="card__text">{props.arr.description}</p>
      <h3 className="card__h3">Языки:</h3>
      <p className="card__text">{props.arr.language}</p>
      <h3 className="card__h3">Форк:</h3>
      <p className="card__text">{props.arr.fork.toString()}</p>
      <h3 className="card__h3">Private:</h3>
      <p className="card__text">{props.arr.private.toString()}</p>
    </div>
  </div>
</div>

);
};

export default Card;
