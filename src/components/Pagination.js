import React from "react";
//import results from "../App";

//console.log(results);

const Pagination = (props) => {

    let i=props.results;

    function nextClick(){
        //setResults(props.results + 1);

        console.log("След кнопка")
    }

    function prevClick(){
        //setResults(props.results + 1);

        console.log("Пред кнопка")
    }

    return (
      
  
<>
  
        
  
          <div className="card__pagination">
              <button className="card__pagination-btn" onClick={prevClick}>Предыдущая страница</button>
              <button className="card__pagination-btn" onClick={nextClick}>Следующая страница</button>
          </div>

          <div className="card__under-pagination">
          Текущая страница: {props.cPage}<br/>
          Всего найдено: {props.results}
          </div>

</>
      
    );
  };
  
  export default Pagination;
  