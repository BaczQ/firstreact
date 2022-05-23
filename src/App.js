import {useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Api from "./components/Api";
import Processing from "./components/Processing";

function App() {
  //ПОЛЬЗОВАТЕЛЬСКИЕ ПЕРЕМЕННЫЕ

  //Инпут для Логина:
  const [login, setLogin] = useState("");

  //Значения из сайдбара:
  const [chkBoxJs, setChkBoxJs] = useState(true);
  const [chkBoxGo, setChkBoxGo] = useState(true);
  const [chkBoxPy, setChkBoxPy] = useState(true);
  const [selectForks, setSelectForks] = useState(">");
  const [selectStars, setSelectStars] = useState(">");
  const [forks, setForks] = useState(0);
  const [stars, setStars] = useState(0);
  const [isFork, setIsFork] = useState(true);

  //ВСПОМОГАТЕЛЬНЫЕ ПЕРЕМЕННЫЕ

  let api = new Api();
  let processing = new Processing();

  const [paginationState, setPaginationState] = useState(false);
  const [dataCards, setDataCards] = useState([]);

  //Используем для того, чтобы сделать неактивными инпуты сайдбара при поиске по логину
  const [viewFilters, setViewFilters] = useState(false);

  //текущая страница (для пагинации)
  const [page, setPage] = useState(0);
  const [results, setResults] = useState(0);

  //Формируем строку для API
  const [apiString, setApiString] = useState("1");

  //----------------------------------------------------------------
  //ФУНКЦИИ
  //----------------------------------------------------------------

  //При изменении логина
  function onChangeLogin(event) {
    setLogin(event.target.value);
    if (event.target.value != "") {
      setViewFilters(true);
    } else {
      setViewFilters(false);
    }
  }

  //Поиск репозиториев по логину
  function searchSubmit(e) {
    e.preventDefault();
    setPaginationState(false);
    let searchLoginString = getFirstLoginString(login);
    let apiPromise = api.searchReps(searchLoginString);

    apiPromise.then((data) => {
      setResults(Object.keys(data).length); //обновляю число найденных результатов
      setPage(1);
      let arr = processing.createArray(data);
      setDataCards(arr);
    });
  }

  //Поиск репозиториев по фильтрам
  function sidebarSubmit(e) {
    e.preventDefault();

    if (viewFilters) {
      setLogin("");
      setViewFilters(false);
    } else {
      //Поиск по фильтрам
      setPaginationState(true);
      let tempString = getFirstRepString();

      setApiString(tempString); //обновляю поисковую строку исходя из значений фильтров

      let apiPromise = api.searchReps(tempString);
      apiPromise.then((data) => {
        setResults(data.total_count); //обновляю число найденных результатов
        setPage(1);

        if (data.total_count > 10) {
          //если получили данные, которые надо делить на страницы
          //для этого нам надо отправить первые 10 items в setDataCards(arr)
          let arr = processing.createArray(data.items.slice(0, 10));
          setDataCards(arr);
        } else {
          //если получили данные, которые не надо делить на страницы
          let arr = processing.createArray(data.items);
          setDataCards(arr);
        }
      });
    }
  }

  //ФУНКЦИИ КНОПОК ПАГИНАЦИИ

  function firstClick() {
    setPage(1);
    searchFromPagination();
  }

  function prevClick() {
    setPage(page - 1);
    searchFromPagination();
  }

  function nextClick() {
    setPage(page + 1);
    searchFromPagination();
  }

  function lastClick() {
    setPage(Math.ceil(results / 10));
    searchFromPagination();
  }

  function searchFromPagination() {
    let apiPromise = api.searchReps(getRepStringPage());
    apiPromise.then((data) => {
      let arr = processing.createArray(data.items);
      setDataCards(arr);
    });
  }

  //СМЕНА СОСТОЯНИЙ ИНПУТОВ В САЙДБАРЕ

  function onChangeChkBoxJs() {
    setChkBoxJs(!chkBoxJs);
  }

  function onChangeChkBoxGo() {
    setChkBoxGo(!chkBoxGo);
  }

  function onChangeChkBoxPy() {
    setChkBoxPy(!chkBoxPy);
  }

  function onChangeSelectForks(event) {
    if (event.target.value == "=") {
      setSelectForks("");
    } else {
      setSelectForks(event.target.value);
    }
  }

  function onChangeSelectStars(event) {
    if (event.target.value == "=") {
      setSelectStars("");
    } else {
      setSelectStars(event.target.value);
    }
  }

  function onChangeForks(event) {
    setForks(event.target.value);
  }

  function onChangeStars(event) {
    setStars(event.target.value);
  }

  function onChangeIsFork() {
    setIsFork(!isFork);
  }

  //Создаём строку для api при поиске по логину
  function getFirstLoginString(log) {

    let searchString = (`https://api.github.com/users/${log}/repos`);
    return searchString;
  }

  //Создаём строку для api при поиске по фильтрам
  function getFirstRepString() {
    let searchString = "https://api.github.com/search/repositories?q=forks:";

    searchString += selectForks + forks + "+";
    searchString += stars > 0 ? "stars:" + selectStars + stars + "+" : "";
    searchString += chkBoxJs ? "language:javascript+" : "";
    searchString += chkBoxGo ? "language:go+" : "";
    searchString += chkBoxPy ? "language:python+" : "";
    searchString += isFork ? "fork:true" : "fork:false";
    return searchString;
  }

  //Создаём строку для api при поиске по фильтрам через Пагинацию
  function getRepStringPage() {
    let tempPage = Number(page) + 1;
    let tempString = apiString + "&per_page=10&page=" + tempPage;
    return tempString;
  }



  return ( 
  
  <div className = "page" >

    <Header
      login = {login}
      onChangeLogin = {onChangeLogin}
      searchSubmit = {searchSubmit}
      btnTitle = "Найти"
    />

    <Main
      chkBoxJs = {chkBoxJs}
      chkBoxGo = {chkBoxGo}
      chkBoxPy = {chkBoxPy}
      selectForks = {selectForks}
      selectStars = {selectStars}
      forks = {forks}
      stars = {stars}
      isFork = {isFork}
      onChangeChkBoxJs = {onChangeChkBoxJs}
      onChangeChkBoxGo = {onChangeChkBoxGo}
      onChangeChkBoxPy = {onChangeChkBoxPy}
      onChangeSelectForks = {onChangeSelectForks}
      onChangeSelectStars = {onChangeSelectStars}
      onChangeForks = {onChangeForks}
      onChangeStars = {onChangeStars}
      onChangeIsFork = {onChangeIsFork}
      viewFilters = {viewFilters}
      sidebarSubmit = {sidebarSubmit}
      btnTitle = {viewFilters ? "Разблокировать" : "Начать поиск"}
      dataCards = {dataCards}
      firstClick = {firstClick}
      prevClick = {prevClick}
      nextClick = {nextClick}
      lastClick = {lastClick}
      page = {page}
      results = {results}
      paginationState = {paginationState}
    />

    <Footer />

    </div>
  );
}

export default App;
