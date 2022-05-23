import React from "react";
import "./index.css";
import Card from "./Card";
import Pagination from "./Pagination";

function CardConteiner(props) {
  return (
    <div className="card-conteiner">
      {props.dataCards[0] != null &&
        props.dataCards.map((item, i) => (
          <Card key={i} id={i} arr={item} page={props.page} />
        ))}

      <Pagination
        firstClick={props.firstClick}
        prevClick={props.prevClick}
        nextClick={props.nextClick}
        lastClick={props.lastClick}
        page={props.page}
        results={props.results}
        paginationState={props.paginationState}
      />
    </div>
  );
}

export default CardConteiner;
