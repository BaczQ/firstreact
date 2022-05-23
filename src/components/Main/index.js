import React from "react";
import "./index.css";
import Sidebar from "../Sidebar";
import CardConteiner from "../CardConteiner";

function Main(props) {
  return (
    <main className="main">
      <div className="main-wrap">
        <Sidebar
          chkBoxJs={props.chkBoxJs}
          chkBoxGo={props.chkBoxGo}
          chkBoxPy={props.chkBoxPy}
          selectForks={props.selectForks}
          selectStars={props.selectStars}
          forks={props.forks}
          stars={props.stars}
          isFork={props.isFork}
          onChangeChkBoxJs={props.onChangeChkBoxJs}
          onChangeChkBoxGo={props.onChangeChkBoxGo}
          onChangeChkBoxPy={props.onChangeChkBoxPy}
          onChangeSelectForks={props.onChangeSelectForks}
          onChangeSelectStars={props.onChangeSelectStars}
          onChangeForks={props.onChangeForks}
          onChangeStars={props.onChangeStars}
          onChangeIsFork={props.onChangeIsFork}
          viewFilters={props.viewFilters}
          sidebarSubmit={props.sidebarSubmit}
          btnTitle={props.btnTitle}
        />

        <CardConteiner
          firstClick={props.firstClick}
          prevClick={props.prevClick}
          nextClick={props.nextClick}
          lastClick={props.lastClick}
          page={props.page}
          results={props.results}
          dataCards={props.dataCards}
          paginationState={props.paginationState}
        />
      </div>
    </main>
  );
}

export default Main;
