import { useState, useEffect } from 'react';
import React from "react";
import './index.css';

function Pagination(props) {
    const [btnPrevDisable, setBtnPrevDisable] = useState(false);
    const [btnNextDisable, setBtnNextDisable] = useState(false);
    let pages = Math.ceil(props.results / 10);

    useEffect(() => {
        
        //ЕСЛИ ТЕКУЩАЯ ПЕРВАЯ СТРАНИЦА
        if (pages == 0){
            //отключаем все кнопки
            setBtnPrevDisable(false);
            setBtnNextDisable(false);
        }
        else if (pages==1) {
            //отключаем последние две кнопки
            setBtnNextDisable(false);
        }
        else {
            if (props.page <= 1){
                //отключаем первые две кнопки
                setBtnPrevDisable(false);
            }
            else{
                setBtnPrevDisable(true);
            }

            if (props.page >= pages){
                //отключаем последние две кнопки
                setBtnNextDisable(false);
            }
            else{
                //отключаем последние две кнопки
                setBtnNextDisable(true);
            }
        }
        
        },[props.page, props.results]
    );

    let className1 = "pagination box-shadow-1";
    let className2 = "under-pagination";

    if (!props.paginationState){
        className1 = "pagination_disabled";
        className2 = "pagination_disabled";
    }

    return (
<>
          <div className={className1}>

              <button
                className={!btnPrevDisable ? 'pagination-btn pagination-btn_disabled': 'pagination-btn'}
                onClick={props.firstClick}
                disabled = {!btnPrevDisable && 'enabled'}  
              >«</button>
              
              <button
                className={!btnPrevDisable ? 'pagination-btn pagination-btn_disabled': 'pagination-btn'}
                onClick={props.prevClick}
                disabled = {!btnPrevDisable && 'enabled'}
              >‹</button>

              <button
                className={!btnNextDisable ? 'pagination-btn pagination-btn_disabled': 'pagination-btn'}
                onClick={props.nextClick}
                disabled = {!btnNextDisable && 'enabled'}
              >›</button>

              <button
                className={!btnNextDisable ? 'pagination-btn pagination-btn_disabled': 'pagination-btn'}
                onClick={props.lastClick}
                disabled = {!btnNextDisable && 'enabled'}
              >»</button>

          </div>

          <div className={className2}>
          Cтраница: {props.page} из {pages}<br/>
          Всего найдено: {props.results}
          </div>
</>
    );
  };
  
  export default Pagination;
