import React from "react";

const Pagination = (props) => {

    function nextClick(){
        console.log("След кнопка");
    }

    function prevClick(){
        console.log("Пред кнопка");
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